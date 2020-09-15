import React from "react";
import Question from "../ui/question";

class QuestionsContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: this.getUserQuestions(),

      //   questions: [
      //     {
      //       id: "vthrdm985a262al8qx3do",
      //       author: "tylermcginnis",
      //       timestamp: 1489579767190,
      //       optionOne: { votes: Array(1), text: "find $50 yourself" },
      //       optionTwo: {
      //         votes: Array(1),
      //         text: "have your best friend find $500",
      //       },
      //     },
      //     {
      //       id: "vthrdm985a262al8qx3do",
      //       author: "tylermcginnis",
      //       timestamp: 1489579767190,
      //       optionOne: { votes: Array(1), text: "find $50 yourself" },
      //       optionTwo: {
      //         votes: Array(1),
      //         text: "have your best friend find $500",
      //       },
      //     },
      //     {
      //       id: "vthrdm985a262al8qx3do",
      //       author: "tylermcginnis",
      //       timestamp: 1489579767190,
      //       optionOne: { votes: Array(1), text: "find $50 yourself" },
      //       optionTwo: {
      //         votes: Array(1),
      //         text: "have your best friend find $500",
      //       },
      //     },
      //     {
      //       id: "vthrdm985a262al8qx3do",
      //       author: "tylermcginnis",
      //       timestamp: 1489579767190,
      //       optionOne: { votes: Array(1), text: "find $50 yourself" },
      //       optionTwo: {
      //         votes: Array(1),
      //         text: "have your best friend find $500",
      //       },
      //     },
      //   ],
    };
  }

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

      unansweredQuestions.sort(this.compare);

      answeredQuestions.sort(this.compare);

      return type === "unanswered" ? unansweredQuestions : answeredQuestions;
    }
    return [];
  };

  compare(a, b) {
    const questionA = new Date(a.timestamp * 1000);
    const questionB = new Date(b.timestamp * 1000);

    let comparison = 0;
    if (questionA < questionB) {
      comparison = 1;
    } else if (questionA > questionB) {
      comparison = -1;
    }
    return comparison;
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
          {this.state.questions.map((question, index) => (
            <Question key={index} question={question} />
          ))}
        </div>
      </div>
    );
  }
}

export default QuestionsContent;
