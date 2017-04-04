import React, { Component } from "react";
// import { Link } from 'react-router';

class Youtube extends Component {
  constructor(props) {
    super(props);
    this.state = {
      youtubeResults: {}
    };
  }

  componentDidMount() {
    fetch("http://localhost:8000/youtubeApi/", {
      method: "GET"
    })
    .then((results) => {
      results.json().then((youtubeResults_data) => {
        this.setState({youtubeResults: youtubeResults_data});
      });
    })
    .catch((err) => {
      console.log(err);
    });
  }

  render() {
    return (
      <div className="">
        <h3>Youtube Top Ten</h3>
        <ol type="1">
          <li><a href={"https://www.youtube.com/watch?v=" + this.state.youtubeResults.youtubeId1}>{this.state.youtubeResults.youtubeResult1}</a></li>
          <li><a href={"https://www.youtube.com/watch?v=" + this.state.youtubeResults.youtubeId2}>{this.state.youtubeResults.youtubeResult2}</a></li>
          <li><a href={"https://www.youtube.com/watch?v=" + this.state.youtubeResults.youtubeId3}>{this.state.youtubeResults.youtubeResult3}</a></li>
          <li><a href={"https://www.youtube.com/watch?v=" + this.state.youtubeResults.youtubeId4}>{this.state.youtubeResults.youtubeResult4}</a></li>
          <li><a href={"https://www.youtube.com/watch?v=" + this.state.youtubeResults.youtubeId5}>{this.state.youtubeResults.youtubeResult5}</a></li>
          <li><a href={"https://www.youtube.com/watch?v=" + this.state.youtubeResults.youtubeId6}>{this.state.youtubeResults.youtubeResult6}</a></li>
          <li><a href={"https://www.youtube.com/watch?v=" + this.state.youtubeResults.youtubeId7}>{this.state.youtubeResults.youtubeResult7}</a></li>
          <li><a href={"https://www.youtube.com/watch?v=" + this.state.youtubeResults.youtubeId8}>{this.state.youtubeResults.youtubeResult8}</a></li>
          <li><a href={"https://www.youtube.com/watch?v=" + this.state.youtubeResults.youtubeId9}>{this.state.youtubeResults.youtubeResult9}</a></li>
          <li><a href={"https://www.youtube.com/watch?v=" + this.state.youtubeResults.youtubeId10}>{this.state.youtubeResults.youtubeResult10}</a></li>
        </ol>
      </div>

    );
  }
}

export default Youtube;
