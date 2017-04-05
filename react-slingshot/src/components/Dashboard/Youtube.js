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
        <h3 className="youtubeItems">YouTube Top Ten</h3>
          <a className="youtubeItems" target="_blank" href={"https://www.youtube.com/watch?v=" + this.state.youtubeResults.youtubeId1}>{this.state.youtubeResults.youtubeResult1}</a>
          <a className="youtubeItems" target="_blank" href={"https://www.youtube.com/watch?v=" + this.state.youtubeResults.youtubeId2}>{this.state.youtubeResults.youtubeResult2}</a>
          <a className="youtubeItems" target="_blank" href={"https://www.youtube.com/watch?v=" + this.state.youtubeResults.youtubeId3}>{this.state.youtubeResults.youtubeResult3}</a>
          <a className="youtubeItems" target="_blank" href={"https://www.youtube.com/watch?v=" + this.state.youtubeResults.youtubeId4}>{this.state.youtubeResults.youtubeResult4}</a>
          <a className="youtubeItems" target="_blank" href={"https://www.youtube.com/watch?v=" + this.state.youtubeResults.youtubeId5}>{this.state.youtubeResults.youtubeResult5}</a>
          <a className="youtubeItems" target="_blank" href={"https://www.youtube.com/watch?v=" + this.state.youtubeResults.youtubeId6}>{this.state.youtubeResults.youtubeResult6}</a>
          <a className="youtubeItems" target="_blank" href={"https://www.youtube.com/watch?v=" + this.state.youtubeResults.youtubeId7}>{this.state.youtubeResults.youtubeResult7}</a>
          <a className="youtubeItems" target="_blank" href={"https://www.youtube.com/watch?v=" + this.state.youtubeResults.youtubeId8}>{this.state.youtubeResults.youtubeResult8}</a>
          <a className="youtubeItems" target="_blank" href={"https://www.youtube.com/watch?v=" + this.state.youtubeResults.youtubeId9}>{this.state.youtubeResults.youtubeResult9}</a>
          <a className="youtubeItems" target="_blank" href={"https://www.youtube.com/watch?v=" + this.state.youtubeResults.youtubeId10}>{this.state.youtubeResults.youtubeResult10}</a>
      </div>

    );
  }
}

export default Youtube;
