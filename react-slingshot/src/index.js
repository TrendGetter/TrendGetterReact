import React from "react";
import ReactDom from "react-dom";
import{ Route, Router, browserHistory } from "react-router";

// import "./vendor/bootstrap/css/bootstrap.min.css";
// import "./vendor/font-awesome/css/font-awesome.min.css";

import "./styles/style.css";
// import "./styles/normalize.css";

// import "./styles/bulma-0.4.0/css/bulma.css";
// import "./styles/materialize/css/materialize.min.css";

import Dashboard from "./components/Dashboard/Dashboard";

ReactDom.render(
  <Router history={browserHistory}>
    <Route path="/" component={Dashboard} />
  </Router>
, document.getElementById("app"));
