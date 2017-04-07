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
    fetch("https://trendgetterexpress.herokuapp.com/wikiApi/", {
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
      <h3 className="wikiItems">WikipediA Top Ten</h3>
          <a className="wikiItems" target="_blank" href={"https://en.wikipedia.org/wiki/" + this.state.wikiResults.wikiResult1}>{this.state.wikiResults.wikiResult1}</a>
          <a className="wikiItems" target="_blank" href={"https://en.wikipedia.org/wiki/" + this.state.wikiResults.wikiResult2}>{this.state.wikiResults.wikiResult2}</a>
          <a className="wikiItems" target="_blank" href={"https://en.wikipedia.org/wiki/" + this.state.wikiResults.wikiResult3}>{this.state.wikiResults.wikiResult3}</a>
          <a className="wikiItems" target="_blank" href={"https://en.wikipedia.org/wiki/" + this.state.wikiResults.wikiResult4}>{this.state.wikiResults.wikiResult4}</a>
          <a className="wikiItems" target="_blank" href={"https://en.wikipedia.org/wiki/" + this.state.wikiResults.wikiResult5}>{this.state.wikiResults.wikiResult5}</a>
          <a className="wikiItems" target="_blank" href={"https://en.wikipedia.org/wiki/" + this.state.wikiResults.wikiResult6}>{this.state.wikiResults.wikiResult6}</a>
          <a className="wikiItems" target="_blank" href={"https://en.wikipedia.org/wiki/" + this.state.wikiResults.wikiResult7}>{this.state.wikiResults.wikiResult7}</a>
          <a className="wikiItems" target="_blank" href={"https://en.wikipedia.org/wiki/" + this.state.wikiResults.wikiResult8}>{this.state.wikiResults.wikiResult8}</a>
          <a className="wikiItems" target="_blank" href={"https://en.wikipedia.org/wiki/" + this.state.wikiResults.wikiResult9}>{this.state.wikiResults.wikiResult9}</a>
          <a className="wikiItems" target="_blank" href={"https://en.wikipedia.org/wiki/" + this.state.wikiResults.wikiResult10}>{this.state.wikiResults.wikiResult10}</a>
      </div>

    );
  }
}

export default Wiki;
