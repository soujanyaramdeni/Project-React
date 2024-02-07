import React, { useState, useRef, useEffect } from 'react';
const VideoPlayer = ({ videoList }) => {
  console.log(videoList)
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [selectedVideo, setSelectedVideo]=useState(videoList[0]);

  
  useEffect(() => {
    videoRef.current.load();
  }, [selectedVideo]);
  const handleVideoChange = (video) => {
    setSelectedVideo(video);
    setIsPlaying(false);
  };
  return (
    <div>
      <div>
        <video ref={videoRef}
          controls
          width="600" height="400"
          onEnded={() => setIsPlaying(false)}>
          <source src={selectedVideo.url} type="video/mp4" />
        </video>
      </div>

      <div>
        <h3>Video List</h3>
        <ul>
          {videoList.map((video, index) => (
            <li
             key={index} onClick={() => handleVideoChange(video)}>
              {video.title}
              {console.log(video.title)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default VideoPlayer