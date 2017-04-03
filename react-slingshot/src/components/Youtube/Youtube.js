import React, { Component } from "react";
import { Link } from 'react-router';

class Youtube extends Component {
  constructor(props) {
    super(props);
    this.state ={
      youtubeResults: []
    };
  }

  componentDidMount() {
    fetch("localhost:8000/youtubeApi/", {
      method: "GET"
    })
    .then((results) => {
      results.json().then((youtubeResults_data) => {
        this.setState({youtubeResults: youtubeResults_data})
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
          <li>{youtubeResults.youtubeResult1}</li>
          <li>{youtubeResults.youtubeResult2}</li>
          <li>{youtubeResults.youtubeResult3}</li>
          <li>{youtubeResults.youtubeResult4}</li>
          <li>{youtubeResults.youtubeResult5}</li>
          <li>{youtubeResults.youtubeResult6}</li>
          <li>{youtubeResults.youtubeResult7}</li>
          <li>{youtubeResults.youtubeResult8}</li>
          <li>{youtubeResults.youtubeResult9}</li>
          <li>{youtubeResults.youtubeResult10}</li>
        </ol>
      </div>

    );
  }
}

export default Youtube;
