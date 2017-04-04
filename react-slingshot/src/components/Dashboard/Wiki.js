import React, { Component } from "react";
// import { Link } from 'react-router';

class Wiki extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wikiResults: {}
    };
  }

  componentDidMount() {
    fetch("http://localhost:8000/wikiApi/", {
      method: "GET"
    })
    .then((results) => {
      results.json().then((wikiResults_data) => {
        this.setState({wikiResults: wikiResults_data});
      });
    })
    .catch((err) => {
      console.log(err);
    });
  }

  render() {
    return (
      <div className="">
      <h3>Wiki Top Ten</h3>
        <ol type="1">
          <li><a href={"https://en.wikipedia.org/wiki/" + this.state.wikiResults.wikiResult1}>{this.state.wikiResults.wikiResult1}</a></li>
          <li><a href={"https://en.wikipedia.org/wiki/" + this.state.wikiResults.wikiResult2}>{this.state.wikiResults.wikiResult2}</a></li>
          <li><a href={"https://en.wikipedia.org/wiki/" + this.state.wikiResults.wikiResult3}>{this.state.wikiResults.wikiResult3}</a></li>
          <li><a href={"https://en.wikipedia.org/wiki/" + this.state.wikiResults.wikiResult4}>{this.state.wikiResults.wikiResult4}</a></li>
          <li><a href={"https://en.wikipedia.org/wiki/" + this.state.wikiResults.wikiResult5}>{this.state.wikiResults.wikiResult5}</a></li>
          <li><a href={"https://en.wikipedia.org/wiki/" + this.state.wikiResults.wikiResult6}>{this.state.wikiResults.wikiResult6}</a></li>
          <li><a href={"https://en.wikipedia.org/wiki/" + this.state.wikiResults.wikiResult7}>{this.state.wikiResults.wikiResult7}</a></li>
          <li><a href={"https://en.wikipedia.org/wiki/" + this.state.wikiResults.wikiResult8}>{this.state.wikiResults.wikiResult8}</a></li>
          <li><a href={"https://en.wikipedia.org/wiki/" + this.state.wikiResults.wikiResult9}>{this.state.wikiResults.wikiResult9}</a></li>
          <li><a href={"https://en.wikipedia.org/wiki/" + this.state.wikiResults.wikiResult10}>{this.state.wikiResults.wikiResult10}</a></li>
        </ol>
      </div>

    );
  }
}

export default Wiki;
