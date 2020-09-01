import React from "react";
import "./style/_custom.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/pages/login";
import Homepage from "./components/pages/homepage";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Login} />
      <Route exact path="/homepage/" component={Homepage} />
    </Router>
  );
}

export default App;
