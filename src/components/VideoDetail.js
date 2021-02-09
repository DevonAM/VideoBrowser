import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return (
      <div>
        <div class="ui active inverted dimmer" style={{ marginTop: "2em" }}>
          <div class="ui huge text loader">Loading...</div>
        </div>
      </div>
    );
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe title="Video Player" src={videoSrc} />
      </div>
      <div className="ui segment">
        <h4>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
