import React from "react";
import { connect } from "react-redux";

class CurrentUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user || {
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
    };
  }

  render() {
    const { name, avatarURL } = this.state.user;

    return (
      <div>
        <img
          src={avatarURL}
          alt="User avatar"
          width="32"
          height="32"
          className="mr-3"
        />
        <span className="text-white">{name}</span>
      </div>
    );
  }
}

function mapStateToProps({ loggedInUser }) {
  return {
    user: loggedInUser,
  };
}

export default connect(mapStateToProps)(CurrentUser);
