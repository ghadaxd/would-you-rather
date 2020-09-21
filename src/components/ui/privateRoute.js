import React from "react";
import { connect } from "react-redux";

import { Route, Redirect } from "react-router-dom";

import Login from "../pages/login";

// Applied redirect auth approach from react router docs at: https://reactrouter.com/web/example/auth-workflow

const PrivateRoute = ({ ...rest }) => {
  const { path, user } = rest;

  //Logged in user should come from the saved state,
  // TO BE REMOVED
  const loggedInUser = user || sessionStorage.getItem("loggedInUserId");

  const route =
    loggedInUser !== null ? (
      path !== undefined ? (
        <Route {...rest} />
      ) : (
        <Redirect to="/pageNotFound" />
      )
    ) : (
      <Route {...rest} component={Login} />
    );
  return route;
};

function mapStateToProps({ loggedInUser }) {
  return {
    user: loggedInUser,
  };
}

export default connect(mapStateToProps)(PrivateRoute);
