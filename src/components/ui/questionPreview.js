import React from "react";
import { Link } from "react-router-dom";
import QuestionHeader from "./questionHeader";

const QuestionPreview = (props) => {
  const { question, questionType } = props;

  return (
    <div className="questionContainer col-4 p-2 m-3">
      <QuestionHeader author={question.author} />
      <h3 className="pt-2">Would you rather ...</h3>
      <div className="d-flex justify-content-between">
        <li className="p-2 text-truncate">{question.optionOne.text}..</li>

        <Link
          className="pt-2 pollLink"
          to={{
            pathname: `questions/${question.id}`,
            state: { questionType: questionType },
          }}
        >
          View Poll
        </Link>
      </div>
    </div>
  );
};

export default QuestionPreview;
