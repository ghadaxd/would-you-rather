import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Question extends React.Component {
  getQuestionAuthor = (authorId) => {
    const users = [
      {
        id: "sarahedo",
        name: "Sarah Edo",
        avatarURL: "/assets/smile.svg",
        answers: {
          "8xf0y6ziyjabvozdd253nd": "optionOne",
          "6ni6ok3ym7mf1p33lnez": "optionTwo",
          am8ehyc8byjqgar0jgpub9: "optionTwo",
          loxhs1bqm25b708cmbf3g: "optionTwo",
        },
        questions: ["8xf0y6ziyjabvozdd253nd", "am8ehyc8byjqgar0jgpub9"],
      },
      {
        id: "tylermcginnis",
        name: "Tyler McGinnis",
        avatarURL: "/assets/sunglasses.svg",
        answers: {
          vthrdm985a262al8qx3do: "optionOne",
          xj352vofupe1dqz9emx13r: "optionTwo",
        },
        questions: ["loxhs1bqm25b708cmbf3g", "vthrdm985a262al8qx3do"],
      },
      {
        id: "johndoe",
        name: "John Doe",
        avatarURL: "/assets/laugh.svg",
        answers: {
          xj352vofupe1dqz9emx13r: "optionOne",
          vthrdm985a262al8qx3do: "optionTwo",
          "6ni6ok3ym7mf1p33lnez": "optionTwo",
        },
        questions: ["6ni6ok3ym7mf1p33lnez", "xj352vofupe1dqz9emx13r"],
      },
    ];

    return (
      this.props.users.find((user) => user.id === authorId) ||
      users.find((user) => user.id === authorId)
    );
  };

  render() {
    const { question } = this.props;
    const { name, avatarURL } = this.getQuestionAuthor(question.author);

    return (
      <div className="questionContainer col-4 p-2 m-3">
        <div className="userContainer pb-2">
          <img
            src={avatarURL}
            alt="User avatar"
            width="52"
            height="52"
            className="mr-3 p-1 userAvatar"
          />
          {name} say:
        </div>
        <h3 className="pt-2">Would you rather ...</h3>
        <div className="d-flex justify-content-between">
          <li className="p-2 text-truncate">{question.optionOne.text}..</li>
          <Link className="p-2 pollLink" to={`questions/${question.id}`}>
            View Poll
          </Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users,
  };
}

export default connect(mapStateToProps)(Question);
