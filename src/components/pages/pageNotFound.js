import React from "react";
import Navbar from "../ui/navbar";

class PageNotFound extends React.Component {
  render() {
    return (
      <div className="fluid-container">
        <Navbar />
        <span>404</span>
      </div>
    );
  }
}

export default PageNotFound;
