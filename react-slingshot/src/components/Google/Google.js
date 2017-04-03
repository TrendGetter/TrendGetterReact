import React, { Component } from "react";
import { Link } from 'react-router';
import Pets from "./Pets";

class Google extends Component {
  constructor(props) {
    super(props);
    this.state ={
      googleResults: []
    };
  }

  componentDidMount() {
    fetch("localhost:8000/googleApi/", {
      method: "GET"
    })
    .then((results) => {
      results.json().then((googleResults_data) => {
        this.setState({googleResults: googleResults_data})
      });
    })
    .catch((err) => {
      console.log(err);
    })
  }

  render() {
    return (
      <div className="">
        <ol type="1">
          <li>{googleResults.googleResult1}</li>
          <li>{googleResults.googleResult2}</li>
          <li>{googleResults.googleResult3}</li>
          <li>{googleResults.googleResult4}</li>
          <li>{googleResults.googleResult5}</li>
          <li>{googleResults.googleResult6}</li>
          <li>{googleResults.googleResult7}</li>
          <li>{googleResults.googleResult8}</li>
          <li>{googleResults.googleResult9}</li>
          <li>{googleResults.googleResult10}</li>
        </ol>
      </div>

    );
  }
}

export default Google;
