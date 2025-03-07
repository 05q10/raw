// src/Video.js
import React, { useState } from 'react';
import myVideo from "../../src/test.mp4"

const Video = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      <video
        src={myVideo}
        autoPlay
        loop
        muted
        preload="auto"
        style={{ width: '100%', height: 'auto' }}
        onCanPlayThrough={() => setIsLoading(false)}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
