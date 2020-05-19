import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import App from "./component/app";

export default function Approute() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={App}></Route>
      </Switch>
    </Router>
  );
}
