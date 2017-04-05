import React, { Component } from "react";
// import { Link } from "react-router";
import Google from "./Google";
import Wiki from "./Wiki";
import Reddit from "./Reddit";
import Youtube from "./Youtube";

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render (){
    return (
      <div>
        <div id="logoBanner">
          <h1 id="logo">Trend Getter: Trends From the Last 24hrs</h1>
        </div>
        <div className="component-align">
          <div className="parallaxGoogle">
          </div>

          <div className="elementMargin">
            <Google />
          </div>
          <br/>

          <div className="parallaxWiki">
          </div>

          <div className="elementMargin" >
            <Wiki />
          </div>
          <br/>

          <div className="parallaxReddit">
          </div>

          <div className="elementMargin">
            <Reddit />
          </div>
          <br/>

          <div className="parallaxYoutube">
          </div>

          <div className="elementMargin">
            <Youtube />
          </div>
          <br/>
        </div>

      </div>

    );
  }
}


export default Dashboard;
