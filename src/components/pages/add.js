import React from "react";
import { connect } from "react-redux";

import { addNewPoll } from "../../actions/addNewPoll";
import Navbar from "../ui/navbar";

class Add extends React.Component {
  constructor() {
    super();
    this.state = {
      optionOne: "",
      optionTwo: "",
      isDisabled: true,
    };
  }

  submitNewPoll = (e) => {
    e.preventDefault();

    if (this.state.optionOne !== "" && this.state.optionTwo !== "") {
      const question = {
        author: this.props.user.id,
        optionOneText: this.state.optionOne,
        optionTwoText: this.state.optionTwo,
      };
      this.props.addNewPoll(question);

      this.props.history.push("/homepage");
    }
  };

  render() {
    return (
      <div className="fluid-container">
        <Navbar />
        <div className="container mt-5 pt-5 d-flex justify-content-center">
          <div className="col-6 p-2 m-3">
            <div className="questionContainer p-4 m-3 text-center">
              <h3 className="mt-3 mb-3">Would you rather ...</h3>

              <form onSubmit={(e) => this.submitNewPoll(e)}>
                <input
                  type="text"
                  className="form-control"
                  id="opt1"
                  onChange={(e) => this.setState({ optionOne: e.target.value })}
                  required
                />

                <div className="mt-3 mb-3">OR</div>

                <input
                  type="text"
                  className="form-control"
                  id="opt2"
                  onChange={(e) => this.setState({ optionTwo: e.target.value })}
                  required
                />

                <button type="submit" className="btn voteBtn mt-3">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ loggedInUser }) {
  return {
    user: loggedInUser,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNewPoll: (question) => dispatch(addNewPoll(question)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Add);
