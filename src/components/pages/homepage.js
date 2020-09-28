import React from "react";
import Navbar from "../ui/navbar";
import QuestionsContainer from "../ui/questionsContainer";

class Homepage extends React.Component {
  render() {
    return (
      <div className="fluid-container">
        <Navbar />
        <QuestionsContainer go={this.props.history.go} />
      </div>
    );
  }
}

export default Homepage;
