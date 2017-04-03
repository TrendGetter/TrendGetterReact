import React, { Component } from "react";
import { Link } from 'react-router';

class Wiki extends Component {
  constructor(props) {
    super(props);
    this.state ={
      wikiResults: []
    };
  }

  componentDidMount() {
    fetch("localhost:8000/wikiApi/", {
      method: "GET"
    })
    .then((results) => {
      results.json().then((wikiResults_data) => {
        this.setState({wikiResults: wikiResults_data})
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
          <li>{wikiResults.wikiResult1}</li>
          <li>{wikiResults.wikiResult2}</li>
          <li>{wikiResults.wikiResult3}</li>
          <li>{wikiResults.wikiResult4}</li>
          <li>{wikiResults.wikiResult5}</li>
          <li>{wikiResults.wikiResult6}</li>
          <li>{wikiResults.wikiResult7}</li>
          <li>{wikiResults.wikiResult8}</li>
          <li>{wikiResults.wikiResult9}</li>
          <li>{wikiResults.wikiResult10}</li>
        </ol>
      </div>

    );
  }
}

export default Wiki;
