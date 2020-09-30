import React from "react";
import QuestionOption from "./questionOption";

const QuestionResult = (props) => {
  const { question, goBack } = props;

  return (
    <div>
      <ul className="mt-3">
        <QuestionOption option={question.optionOne} />
        <QuestionOption option={question.optionTwo} />
      </ul>

      <button
        type="button"
        className="btn voteBtn mt-3"
        onClick={() => goBack()}
      >
        Go Back
      </button>
    </div>
  );
};

export default QuestionResult;
