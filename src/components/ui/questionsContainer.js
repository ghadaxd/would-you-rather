import React from "react";
import { connect } from "react-redux";

import { getQuestions } from "../../actions/getQuestions";

import QuestionsContent from "./questionsContent";
import QuestionsTabs from "./questionsTabs";

class QuestionsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      unansweredQuestions: [],
      answeredQuestions: [],
    };
  }

  componentDidMount() {
    if (this.props.questions.length !== 0) {
      this.setState({
        unansweredQuestions: this.getUserQuestions("unanswered"),
        answeredQuestions: this.getUserQuestions("answered"),
      });
    } else {
      this.props.getQuestions();
    }
  }

  componentDidUpdate(oldProps) {
    if (oldProps.questions.length !== this.props.questions.length) {
      this.setState({
        unansweredQuestions: this.getUserQuestions("unanswered"),
        answeredQuestions: this.getUserQuestions("answered"),
      });
    }
  }

  getUserQuestions = (type) => {
    if (this.props.user !== null) {
      const { user, questions } = this.props;

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

    return [
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
      <div className="container mt-5">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <QuestionsTabs
            title="Un-Answered Questions"
            type="unanswered"
            isActive={true}
          />
          <QuestionsTabs
            title="Answered Questions"
            type="answered"
            isActive={false}
          />
        </ul>
        <div className="tab-content" id="myTabContent">
          <QuestionsContent
            type="unanswered"
            isActive={true}
            questions={this.state.unansweredQuestions}
          />
          <QuestionsContent
            type="answered"
            isActive={false}
            questions={this.state.answeredQuestions}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps({ loggedInUser, questions }) {
  return {
    user: loggedInUser,
    questions,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getQuestions: () => dispatch(getQuestions()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsContainer);
