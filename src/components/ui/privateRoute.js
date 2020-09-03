import React from "react";

import { Route, Redirect } from "react-router-dom";

import Login from "../pages/login";

// Applied redirect auth approach from react router docs at: https://reactrouter.com/web/example/auth-workflow

const PrivateRoute = ({ ...rest }) => {
  const loggedInUser = sessionStorage.getItem("loggedInUserId");
  const { path } = rest;

  const route =
    loggedInUser !== null ? (
      path !== undefined ? (
        <Route {...rest} />
      ) : (
        <Redirect to="/homepage" />
      )
    ) : (
      <Route {...rest} component={Login} />
    );
  return route;
};

export default PrivateRoute;
