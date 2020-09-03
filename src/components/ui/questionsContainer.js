import React from "react";
import QuestionsContent from "./questionsContent";
import QuestionsTabs from "./questionsTabs";

const QuestionsContainer = () => {
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
        <QuestionsContent type="unanswered" isActive={true} />
        <QuestionsContent type="answered" isActive={false} />
      </div>
    </div>
  );
};

export default QuestionsContainer;
