import React, { Component } from "react";
import { Link } from "react-router";
import Google from "./Google"
import Wiki from "./Wiki"
import Reddit from "./Reddit"
import Youtube from "./Youtube"

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render (){
    return (
      <div>

        <Google />
        <Wiki />
        <Reddit />
        <Youtube />

      </div>

    );
  }
}


export default Dashboard;
