import React from "react";
import QuestionOption from "./questionOption";

class QuestionResult extends React.Component {
  render() {
    const { question } = this.props;

    return (
      <div>
        <ul className="mt-3">
          <QuestionOption option={question.optionOne} />
          <QuestionOption option={question.optionTwo} />
        </ul>

        <button
          type="button"
          className="btn voteBtn mt-3"
          onClick={() => this.props.goBack()}
        >
          Go Back
        </button>
      </div>
    );
  }
}

export default QuestionResult;
