import React from "react";
import Navbar from "../ui/navbar";
import QuestionsContainer from "../ui/questionsContainer";

const Homepage = (props) => {
  return (
    <div className="fluid-container">
      <Navbar />
      <QuestionsContainer go={props.history.go} />
    </div>
  );
};

export default Homepage;
