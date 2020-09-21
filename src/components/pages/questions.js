import React from "react";
import Navbar from "../ui/navbar";

class Questions extends React.Component {
  render() {
    console.log(this.props.match.params.id);
    return (
      <div className="fluid-container">
        <Navbar />
        {/* Question Details component */}
        <span>Hii</span>
      </div>
    );
  }
}

export default Questions;
