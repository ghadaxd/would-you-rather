import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import Navbar from "../ui/navbar";
import QuestionDetails from "../ui/questionDetails";

class Questions extends React.Component {
  getQuestionById = (questionId) => {
    return this.props.questions.find((question) => question.id === questionId);
  };

  render() {
    const question = this.getQuestionById(this.props.match.params.id);

    if (question === undefined) {
      return <Redirect to="/pageNotFound" />;
    }

    return (
      <div className="fluid-container">
        <Navbar />
        <div className="container mt-5 pt-5 d-flex justify-content-center">
          <QuestionDetails
            question={question}
            questionType={this.props.location.state.questionType}
            goBack={this.props.history.goBack}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps({ questions }) {
  return {
    questions,
  };
}

export default connect(mapStateToProps)(Questions);
