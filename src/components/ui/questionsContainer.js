import React from "react";
import { connect } from "react-redux";
import QuestionsContent from "./questionsContent";
import QuestionsTabs from "./questionsTabs";
import { getQuestions } from "../../actions/getQuestions";

class QuestionsContainer extends React.Component {
  componentDidMount() {
    this.props.questions.length === 0 && this.props.dispatch(getQuestions());
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
            questions={this.props.questions}
            user={this.props.user}
          />
          <QuestionsContent
            type="answered"
            isActive={false}
            questions={this.props.questions}
            user={this.props.user}
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

export default connect(mapStateToProps)(QuestionsContainer);
