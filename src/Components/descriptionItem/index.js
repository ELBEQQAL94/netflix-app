import React, {Component} from "react";

const DescriptionItem = ({src, logo, story, poster}) => {
  return (
    <div className="description-item">
      <div className="logo">
          {logo}
      </div>
      <div className="story">{story}</div>
      <video controls muted poster={poster} id="bgvid">
        <source src={src} type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>
    </div>
  );
};

export default DescriptionItem;
