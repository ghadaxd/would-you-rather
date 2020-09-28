import React from "react";

class QuestionPoll extends React.Component {
  constructor() {
    super();
    this.state = {
      isDisabled: true,
      answer: "",
    };
  }

  render() {
    const { question } = this.props;

    return (
      <div className="d-flex flex-column align-items-center">
        <ul className="mt-3">
          <li>
            <input
              className="form-check-input"
              type="radio"
              name="questionOpt"
              id="questionOpt1"
              value="opt1"
              onChange={() =>
                this.setState({ isDisabled: false, answer: "optionOne" })
              }
            />
            <label className="form-check-label" htmlFor="questionOpt1">
              {question.optionOne.text}
            </label>
          </li>
          <li>
            <input
              className="form-check-input"
              type="radio"
              name="questionOpt"
              id="questionOpt2"
              value="opt2"
              onChange={() =>
                this.setState({ isDisabled: false, answer: "optionTwo" })
              }
            />
            <label className="form-check-label" htmlFor="questionOpt2">
              {question.optionTwo.text}
            </label>
          </li>
        </ul>
        <div>
          <button
            type="button"
            className="btn voteBtn mt-3 mr-5"
            onClick={() => this.props.vote(this.state.answer)}
            disabled={this.state.isDisabled}
          >
            Vote
          </button>
          <button
            type="button"
            className="btn voteBtn mt-3"
            onClick={() => this.props.goBack()}
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }
}

export default QuestionPoll;
