import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import Navbar from "../ui/navbar";
import QuestionDetails from "../ui/questionDetails";

const Questions = (props) => {
  const question = getQuestionById(props.questions, props.match.params.id);

  if (question === undefined) {
    return <Redirect to="/pageNotFound" />;
  }

  return (
    <div className="fluid-container">
      <Navbar />
      <div className="container mt-5 pt-5 d-flex justify-content-center">
        <QuestionDetails
          question={question}
          questionType={props.location.state.questionType}
          goBack={props.history.goBack}
        />
      </div>
    </div>
  );
};

const getQuestionById = (questions, questionId) => {
  return questions.find((question) => question.id === questionId);
};

function mapStateToProps({ questions }) {
  return {
    questions,
  };
}

export default connect(mapStateToProps)(Questions);
