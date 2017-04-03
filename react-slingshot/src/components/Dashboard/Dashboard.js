import React, { Component } from "react";
import { Link } from "react-router";
import Owners from "./Owners"

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render (){
    return (
      <div>
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <Link to="/" className="navbar-brand">Pet List</Link>
                </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                        <li><Link to="/owners/new">Add Owner</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
        

        <Owners />

      </div>

    );
  }
}


export default Dashboard;
