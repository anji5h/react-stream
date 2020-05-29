import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import StreamShow from "./component/streams/streamShow/streamShow";
import StreamCreate from "./component/streams/streamCreate/streamCreate";
import StreamList from "./component/streams/streamList/streamList";
import StreamEdit from "./component/streams/streamEdit/streamEdit";
import StreamDelete from "./component/streams/streamDelete/streamDelete";
import Home from "./component/home/home";

export default function Approute() {
  return (
    <Router>
      <Home></Home>
      <Switch>
        <Route path="/" exact component={StreamList}></Route>
        <Route path="/streams" exact component={StreamList}></Route>
        <Route path="/streams/new" component={StreamCreate}></Route>
        <Route path="/streams/edit" component={StreamEdit}></Route>
        <Route path="/streams/delete" component={StreamDelete}></Route>
        <Route path="/streams/show" component={StreamShow}></Route>
      </Switch>
    </Router>
  );
}
