import React from "react";

class QuestionsContent extends React.Component {
  render() {
    return (
      <div
        className={`tab-pane fade ${this.props.isActive ? "show active" : ""}`}
        id={this.props.type}
        role="tabpanel"
        aria-labelledby={`${this.props.type}-tab`}
      >
        Hii {this.props.type}
      </div>
    );
  }
}

export default QuestionsContent;
