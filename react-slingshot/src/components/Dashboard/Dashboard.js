import React, { Component } from "react";
import { Link } from "react-router";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state ={
    
    };
  }

  componentDidMount() {
    fetch("http://myapi-profstream.herokuapp.com/api/fbaf5b/wines", {
      method: "GET"
    })
    .then((results) => {
      results.json().then((wines_data) => {
        this.setState({wines: wines_data})
      });
    })
    .catch((err) => {
      console.log(err);
    })

  }

  render() {
    return (
      <div>
        {console.log(this.state.wines)}
      {this.state.wines.map((wine)=>{
        return (
      <div key={wine.id} className="container well small-container margin-top-20">

          <div className="row">
              <div className="col-sm-8">
                  <div className="md-font">
                    {wine.name}
                  </div>
                  <div>
                    {wine.year}
                  </div>
                  <div>
                    {wine.grapes}
                  </div>
                  <div>
                      {wine.country}
                  </div>
              </div>
              <div className="col-sm-4 txt-right">
                  <a href="#">
                      <i className="fa fa-pencil margin-right-5"></i>
                      Edit Wine
                  </a>
              </div>
          </div>




          <div className="row margin-top-20">
              <div className="col-sm-12">
                <Link to={`/wines/${wine.id}`} className="btn btn-success">
                      <i className="fa fa-info-circle"> </i>
                       Wine Info
                  </Link>
                  <a href="#" className="btn btn-danger margin-left-5">
                      <i className="fa fa-remove"></i>
                      Remove Wine
                  </a>
              </div>
          </div>
      </div>
    );
      })}
      </div>

    );
  }
}

export default Dashboard;
