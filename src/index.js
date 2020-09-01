import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { createStore } from "redux";
import { applyMiddleware } from "redux";
import { Provider } from "react-redux";

import thunk from "redux-thunk";

import reducer from "./reducers";

import "bootstrap";

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
