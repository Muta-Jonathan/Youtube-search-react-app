import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import YoutubeAPI from "../apis/YoutubeAPI";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

import "../css/App.css";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    onTermSubmit("YouTube");
  }, []);

  const onTermSubmit = async (term) => {
    const response = await YoutubeAPI.get("/search", { params: { q: term } });

    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  };

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={onTermSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            {" "}
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
