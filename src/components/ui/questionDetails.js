import React from "react";
import { connect } from "react-redux";

import QuestionHeader from "./questionHeader";
import QuestionPoll from "./questionPoll";
import QuestionResult from "./questionResult";
import { voteForQuestion } from "../../actions/voteForQuestion";

class QuestionView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionType: props.questionType,
      question: {},
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.question !== this.props.question) {
      this.setState({
        questionType: "answered",
        question: this.props.question,
      });
    }
  }

  vote = (answer) => {
    const { user, question } = this.props;

    const vote = {
      authedUser: user.id,
      qid: question.id,
      answer,
    };

    this.props.voteForQuestion(vote);
  };

  render() {
    const { question, goBack } = this.props;

    return (
      <div className="col-6 p-2 m-3">
        <QuestionHeader author={question.author} />
        <div className="questionContainer p-4 m-3">
          <h3 className="mt-3">Would you rather ...</h3>
          {this.state.questionType === "unanswered" ? (
            <QuestionPoll
              question={question}
              goBack={goBack}
              vote={this.vote}
            />
          ) : (
            <QuestionResult question={this.state.question} goBack={goBack} />
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ loggedInUser, questions }) {
  return {
    user: loggedInUser,
    questions,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    voteForQuestion: (vote) => dispatch(voteForQuestion(vote)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionView);
