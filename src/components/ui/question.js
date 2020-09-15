import React from "react";
import { Link } from "react-router-dom";

import AppName from "./appName";

const Question = (props) => {
  const { question } = props;
  return (
    <div className="questionContainer col-4 p-2 m-3">
      <AppName />
      <div className="d-flex justify-content-between">
        <li className="p-2 text-truncate">{question.optionOne.text}..</li>
        <Link className="p-2 text-white" to={`questions/${question.id}`}>
          View Poll
        </Link>
      </div>
    </div>
  );
};

export default Question;
