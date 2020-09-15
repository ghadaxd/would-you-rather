import React from "react";

class QuestionsContent extends React.Component {
  getUserQuestions = () => {
    if (this.props.user !== null) {
      const { user, questions, type } = this.props;

      const answeredQuestions = questions.filter((question) => {
        return Object.keys(user.answers).find(
          (userQuestion) => userQuestion === question.id
        );
      });

      const unansweredQuestions = questions.filter((question) => {
        return !answeredQuestions.find((answeredQuestion) => {
          return answeredQuestion.id === question.id;
        });
      });

      return type === "unanswered" ? unansweredQuestions : answeredQuestions;
    }
    return [];
  };

  render() {
    return (
      <div
        className={`tab-pane fade ${this.props.isActive ? "show active" : ""}`}
        id={this.props.type}
        role="tabpanel"
        aria-labelledby={`${this.props.type}-tab`}
      >
        {/* render questions cards */}
        {/* Hii {console.log(this.getUserQuestions())} */}
        {this.getUserQuestions().map((question, index) => (
          <li key={index}>{question.id}</li>
        ))}
      </div>
    );
  }
}

export default QuestionsContent;
