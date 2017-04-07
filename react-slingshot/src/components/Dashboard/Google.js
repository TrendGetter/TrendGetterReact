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
    fetch("https://trendgetterexpress.herokuapp.com/googleApi", {
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
        <h3 className="googleItems">Google Top Ten</h3>
          <a className="googleItems" target="_blank" href={"https://www.google.com/search?q=" + this.state.googleResults.googleResult1}>{this.state.googleResults.googleResult1}</a>
          <a className="googleItems" target="_blank" href={"https://www.google.com/search?q=" + this.state.googleResults.googleResult2}>{this.state.googleResults.googleResult2}</a>
          <a className="googleItems" target="_blank" href={"https://www.google.com/search?q=" + this.state.googleResults.googleResult3}>{this.state.googleResults.googleResult3}</a>
          <a className="googleItems" target="_blank" href={"https://www.google.com/search?q=" + this.state.googleResults.googleResult4}>{this.state.googleResults.googleResult4}</a>
          <a className="googleItems" target="_blank" href={"https://www.google.com/search?q=" + this.state.googleResults.googleResult5}>{this.state.googleResults.googleResult5}</a>
          <a className="googleItems" target="_blank" href={"https://www.google.com/search?q=" + this.state.googleResults.googleResult6}>{this.state.googleResults.googleResult6}</a>
          <a className="googleItems" target="_blank" href={"https://www.google.com/search?q=" + this.state.googleResults.googleResult7}>{this.state.googleResults.googleResult7}</a>
          <a className="googleItems" target="_blank" href={"https://www.google.com/search?q=" + this.state.googleResults.googleResult8}>{this.state.googleResults.googleResult8}</a>
          <a className="googleItems" target="_blank" href={"https://www.google.com/search?q=" + this.state.googleResults.googleResult9}>{this.state.googleResults.googleResult9}</a>
          <a className="googleItems" target="_blank" href={"https://www.google.com/search?q=" + this.state.googleResults.googleResult10}>{this.state.googleResults.googleResult10}</a>
      </div>

    );
  }
}

export default Google;
