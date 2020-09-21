import React from "react";

import Question from "../ui/question";

class QuestionsContent extends React.Component {
  constructor() {
    super();
    this.state = {
      questions: [],
    };
  }

  componentDidUpdate(oldProps) {
    if (oldProps.questions.length !== this.props.questions.length) {
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
            this.state.questions.map((question, index) => (
              <Question key={index} question={question} />
            ))
          ) : (
            <span>Loading...</span>
          )}
        </div>
      </div>
    );
  }
}

export default QuestionsContent;
