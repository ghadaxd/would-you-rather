import React from "react";
import { connect } from "react-redux";

import { Route } from "react-router-dom";

import Login from "../pages/login";
import PageNotFound from "../pages/pageNotFound";

// Applied redirect auth approach from react router docs at: https://reactrouter.com/web/example/auth-workflow

const PrivateRoute = ({ ...rest }) => {
  const { path, user } = rest;

  const loggedInUser = user;

  const route =
    loggedInUser !== null ? (
      path !== undefined ? (
        <Route {...rest} />
      ) : (
        <Route {...rest} component={PageNotFound} />
      )
    ) : path === undefined ? (
      <Route {...rest} component={PageNotFound} />
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
