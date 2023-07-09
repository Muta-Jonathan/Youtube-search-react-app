import React from "react";
import SearchBar from "./SearchBar";
import YoutubeAPI from "../apis/YoutubeAPI";
import VideoList from "./VideoList";

import "../css/App.css";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  onTermSubmit = async (term) => {
    const response = await YoutubeAPI.get("/search", { params: { q: term } });

    this.setState({ videos: response.data.items });
  };

  onVideoSelect = (video) => {
    // this.setState({ selectedVideo: video });
    console.log("From the App! ", video);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={this.onVideoSelect}
        />
      </div>
    );
  }
}

export default App;
