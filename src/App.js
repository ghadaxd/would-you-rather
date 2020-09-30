import React from "react";
import "./style/_custom.scss";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import PrivateRoute from "./components/ui/privateRoute";
import Homepage from "./components/pages/homepage";
import Questions from "./components/pages/questions";
import Login from "./components/pages/login";
import Add from "./components/pages/add";
import Leaderboard from "./components/pages/leaderboard";

// Applied redirect auth approach from react router docs at: https://reactrouter.com/web/example/auth-workflow

function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/homepage" component={Homepage} />
        <PrivateRoute exact path="/questions/:id" component={Questions} />
        <PrivateRoute exact path="/add" component={Add} />
        <PrivateRoute exact path="/leaderboard" component={Leaderboard} />
        <PrivateRoute exact path="/" component={Login} />
        <PrivateRoute />
      </Switch>
    </Router>
  );
}

export default App;
