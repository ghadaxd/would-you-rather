import React from "react";

import QuestionPreview from "./questionPreview";

class QuestionsContent extends React.Component {
  constructor() {
    super();
    this.state = {
      questions: [],
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.questions.length !== this.props.questions.length) {
      this.setState({
        questions: this.props.questions,
      });
    }
  }

  render() {
    return (
      <div
        className={`tab-pane fade ${this.props.isActive ? "show active" : ""}`}
        id={this.props.type}
        role="tabpanel"
        aria-labelledby={`${this.props.type}-tab`}
      >
        <div className="d-flex flex-wrap justify-content-center">
          {this.state.questions.length !== 0 ? (
            this.state.questions.map((question) => (
              <QuestionPreview
                viewFrom="questionsContent"
                key={question.id}
                question={question}
                questionType={this.props.type}
              />
            ))
          ) : (
            <span className="text-myGrey p-2 m-3">
              No questions to display = )
            </span>
          )}
        </div>
      </div>
    );
  }
}

export default QuestionsContent;
