import React from "react";
import ReactDom from "react-dom";
import{ Route, Router, browserHistory } from "react-router";

// import "./vendor/bootstrap/css/bootstrap.min.css";
// import "./vendor/font-awesome/css/font-awesome.min.css";

// import "./styles/style.css";

import Dashboard from "./components/Dashboard/Dashboard";
import Google from "./components/Google/Google";
import Wiki from "./components/Wiki/Wiki";

ReactDom.render(
  <Router history={browserHistory}>
    <Route path="/" component={Dashboard} />
    <Route path="/google" component={Google} />
    <Route path="/wiki" component={Wiki} />
  </Router>
, document.getElementById("app"));
