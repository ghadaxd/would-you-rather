import React from "react";

import Navbar from "../ui/navbar";
import QuestionDetails from "../ui/questionDetails";

class Questions extends React.Component {
  getQuestionById = (questionId) => {
    const questions = [
      {
        id: "vthrdm985a262al8qx3do",
        author: "tylermcginnis",
        timestamp: 1489579767190,
        optionOne: { votes: Array(1), text: "find $50 yourself" },
        optionTwo: {
          votes: Array(1),
          text: "have your best friend find $500",
        },
      },
      {
        id: "vthrdm985a262al8qx3do",
        author: "tylermcginnis",
        timestamp: 1489579767190,
        optionOne: { votes: Array(1), text: "find $50 yourself" },
        optionTwo: {
          votes: Array(1),
          text: "have your best friend find $500",
        },
      },
      {
        id: "vthrdm985a262al8qx3do",
        author: "tylermcginnis",
        timestamp: 1489579767190,
        optionOne: { votes: Array(1), text: "find $50 yourself" },
        optionTwo: {
          votes: Array(1),
          text: "have your best friend find $500",
        },
      },
      {
        id: "vthrdm985a262al8qx3do",
        author: "tylermcginnis",
        timestamp: 1489579767190,
        optionOne: { votes: Array(1), text: "find $50 yourself" },
        optionTwo: {
          votes: Array(1),
          text: "have your best friend find $500",
        },
      },
    ];

    return questions.find((question) => question.id === questionId);
    // ||
    // this.props.questions.find((question) => question.id === questionId)
  };

  render() {
    return (
      <div className="fluid-container">
        <Navbar />
        <div className="container mt-5 pt-5 d-flex justify-content-center">
          {/* Question Details component */}
          <QuestionDetails
            question={this.getQuestionById("vthrdm985a262al8qx3do")}
          />
        </div>
      </div>
    );
  }
}

export default Questions;
