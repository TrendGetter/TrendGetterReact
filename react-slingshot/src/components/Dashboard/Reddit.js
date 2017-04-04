import React, { Component } from "react";
// import { Link } from 'react-router';

class Reddit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redditResults: {}
    };
  }

  componentDidMount() {
    fetch("http://localhost:8000/redditApi/", {
      method: "GET"
    })
    .then((results) => {
      results.json().then((redditResults_data) => {
        this.setState({redditResults: redditResults_data});
      });
    })
    .catch((err) => {
      console.log(err);
    });
  }

  render() {
    return (
      <div className="">
        <h3>Reddit Top Ten</h3>
        <ol type="1">
          <li><a href={"https://www.reddit.com" + this.state.redditResults.redditLink1}>{this.state.redditResults.redditResult1}</a></li>
          <li><a href={"https://www.reddit.com" + this.state.redditResults.redditLink2}>{this.state.redditResults.redditResult2}</a></li>
          <li><a href={"https://www.reddit.com" + this.state.redditResults.redditLink3}>{this.state.redditResults.redditResult3}</a></li>
          <li><a href={"https://www.reddit.com" + this.state.redditResults.redditLink4}>{this.state.redditResults.redditResult4}</a></li>
          <li><a href={"https://www.reddit.com" + this.state.redditResults.redditLink5}>{this.state.redditResults.redditResult5}</a></li>
          <li><a href={"https://www.reddit.com" + this.state.redditResults.redditLink6}>{this.state.redditResults.redditResult6}</a></li>
          <li><a href={"https://www.reddit.com" + this.state.redditResults.redditLink7}>{this.state.redditResults.redditResult7}</a></li>
          <li><a href={"https://www.reddit.com" + this.state.redditResults.redditLink8}>{this.state.redditResults.redditResult8}</a></li>
          <li><a href={"https://www.reddit.com" + this.state.redditResults.redditLink9}>{this.state.redditResults.redditResult9}</a></li>
          <li><a href={"https://www.reddit.com" + this.state.redditResults.redditLink10}>{this.state.redditResults.redditResult10}</a></li>
        </ol>
      </div>

    );
  }
}

export default Reddit;