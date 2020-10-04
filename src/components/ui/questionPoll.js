import React, { useState } from "react";

const QuestionPoll = (props) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [answer, setAnswer] = useState("");
  const { question } = props;

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
            onChange={() => {
              setIsDisabled(false);
              setAnswer("optionOne");
            }}
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
            onChange={() => {
              setIsDisabled(false);
              setAnswer("optionTwo");
            }}
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
          onClick={() => props.vote(answer)}
          disabled={isDisabled}
        >
          Vote
        </button>
        <button
          type="button"
          className="btn voteBtn mt-3"
          onClick={() => props.goBack()}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default QuestionPoll;
