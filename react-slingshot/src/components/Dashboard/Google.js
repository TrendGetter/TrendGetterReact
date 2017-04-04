import React, { Component } from "react";
// import { Link } from 'react-router';

class Google extends Component {
  constructor(props) {
    super(props);
    this.state = {
      googleResults: {}
    };
  }

  componentDidMount() {
    fetch("http://localhost:8000/googleApi/", {
      method: "GET"
    })
    .then((results) => {
      results.json().then((googleResults_data) => {
        this.setState({googleResults: googleResults_data});
      });
    })
    .catch((err) => {
      console.log(err);
    });
  }

  render() {
    return (
      <div className="">
        <h3>Google Top Ten</h3>
        <ol type="1">
          <li><a href={"https://www.google.com/search?q=" + this.state.googleResults.googleResult1}>{this.state.googleResults.googleResult1}</a></li>
          <li><a href={"https://www.google.com/search?q=" + this.state.googleResults.googleResult2}>{this.state.googleResults.googleResult2}</a></li>
          <li><a href={"https://www.google.com/search?q=" + this.state.googleResults.googleResult3}>{this.state.googleResults.googleResult3}</a></li>
          <li><a href={"https://www.google.com/search?q=" + this.state.googleResults.googleResult4}>{this.state.googleResults.googleResult4}</a></li>
          <li><a href={"https://www.google.com/search?q=" + this.state.googleResults.googleResult5}>{this.state.googleResults.googleResult5}</a></li>
          <li><a href={"https://www.google.com/search?q=" + this.state.googleResults.googleResult6}>{this.state.googleResults.googleResult6}</a></li>
          <li><a href={"https://www.google.com/search?q=" + this.state.googleResults.googleResult7}>{this.state.googleResults.googleResult7}</a></li>
          <li><a href={"https://www.google.com/search?q=" + this.state.googleResults.googleResult8}>{this.state.googleResults.googleResult8}</a></li>
          <li><a href={"https://www.google.com/search?q=" + this.state.googleResults.googleResult9}>{this.state.googleResults.googleResult9}</a></li>
          <li><a href={"https://www.google.com/search?q=" + this.state.googleResults.googleResult10}>{this.state.googleResults.googleResult10}</a></li>
        </ol>
      </div>

    );
  }
}

export default Google;
