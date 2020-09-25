import React from "react";
// import { Link } from "react-router-dom";
// import { connect } from "react-redux";
import QuestionHeader from "./questionHeader";

class QuestionView extends React.Component {
  render() {
    const { question } = this.props;

    return (
      <div className="col-6 p-2 m-3">
        <QuestionHeader author={question.author} />
        <div className="d-flex flex-column align-items-center questionContainer p-2 m-3">
          <h3 className="mt-3">Would you rather ...</h3>
          <ul className="mt-3">
            <li>
              <input
                className="form-check-input"
                type="radio"
                name="questionOpt"
                id="questionOpt1"
                value="opt1"
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
              />
              <label className="form-check-label" htmlFor="questionOpt2">
                {question.optionTwo.text}
              </label>
            </li>
          </ul>
          <button type="button" className="btn voteBtn mt-3">
            Vote
          </button>
        </div>
      </div>
    );
  }
}

export default QuestionView;
