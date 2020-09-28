import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Navbar from "../ui/navbar";

const PageNotFound = (props) => {
  const loggedInUser = props.user || sessionStorage.getItem("loggedInUserId");

  return (
    <div className="fluid-container">
      {loggedInUser !== null ? <Navbar /> : null}
      <div className="p-5 d-flex justify-content-center align-items-center flex-column">
        <img
          width="30%"
          height="30%"
          src="/assets/dizzy.svg"
          alt="Page not found"
          className="mb-5"
        />
        <h1 className="bg-blue text-white">404</h1>
        <h3 className="text-myBlue">Oops! page not found! : (</h3>
        <Link className="p-2 mt-5 voteBtn" to="/homepage">
          Go to <strong>Homepage</strong>
        </Link>
      </div>
    </div>
  );
};

function mapStateToProps({ loggedInUser }) {
  return {
    user: loggedInUser,
  };
}

export default connect(mapStateToProps)(PageNotFound);
