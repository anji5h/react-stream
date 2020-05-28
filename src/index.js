import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore,applyMiddleware,compose } from "redux";

import App from "./component/app";
import reducer from "./reducer";
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose
ReactDOM.render(
  <Provider store={createStore(reducer,composeEnhancer(applyMiddleware()))}>
    <App></App>
  </Provider>,
  document.querySelector("#root")
);
