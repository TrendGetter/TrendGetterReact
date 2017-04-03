import React, { Component } from "react";
import { Link } from 'react-router';

class Reddit extends Component {
  constructor(props) {
    super(props);
    this.state ={
      redditResults: []
    };
  }

  componentDidMount() {
    fetch("localhost:8000/redditApi/", {
      method: "GET"
    })
    .then((results) => {
      results.json().then((redditResults_data) => {
        this.setState({redditResults: redditResults_data})
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
          <li>{redditResults.redditResult1}</li>
          <li>{redditResults.redditResult2}</li>
          <li>{redditResults.redditResult3}</li>
          <li>{redditResults.redditResult4}</li>
          <li>{redditResults.redditResult5}</li>
          <li>{redditResults.redditResult6}</li>
          <li>{redditResults.redditResult7}</li>
          <li>{redditResults.redditResult8}</li>
          <li>{redditResults.redditResult9}</li>
          <li>{redditResults.redditResult10}</li>
        </ol>
      </div>

    );
  }
}

export default Reddit;
