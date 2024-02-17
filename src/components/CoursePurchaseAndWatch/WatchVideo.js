import React, { useState } from 'react';
import './WatchVideo.css';
import Navbarr from '../Home/Navbarr';

const WatchVideo = () => {
  const [currentVideo, setCurrentVideo] = useState(null);

  const videos = [
    { id: 1, title: 'Introduction', url: 'https://www.youtube.com/embed/cmtba43FO0Q' },
    { id: 2, title: 'What is Mental Health?', url: 'https://www.youtube.com/embed/ZsEyrOWH6Mk' },
    { id: 3, title: 'How to deal with it?', url: 'https://www.youtube.com/embed/V2H3qV67wUc' },
    { id: 4, title: 'How to make health well?', url: 'https://www.youtube.com/embed/ETzFRQ4Drvo' },
    { id: 5, title: 'Time Scheduling for good health', url: 'https://www.youtube.com/embed/92NsfZ6EEuE' },
    { id: 6, title: 'Good Food List ', url: 'https://www.youtube.com/embed/jQvkjEjgib0' },
    { id: 7, title: 'How to smile?', url: 'https://www.youtube.com/embed/haNsrbIfy2s' },
    { id: 8, title: 'How to love?', url: 'https://www.youtube.com/embed/nyq96BuqJ7s' },
    { id: 9, title: 'How to leave?', url: 'https://www.youtube.com/embed/oHRTdJ_bcjw' },
    { id: 10, title: 'Conclusion', url: 'https://www.youtube.com/embed/eTmQWS6djyc' },
  ];

  const handleClick = (video) => {
    setCurrentVideo(video);
  };

  return (
    <>
      <Navbarr />
      <div className="watch-video-container">
        <div className="video-list">
          <h2>Video Titles</h2>
          <ul>
            {videos.map((video) => (
              <li key={video.id} onClick={() => handleClick(video)}>
                {video.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="video-player">
          {currentVideo ? (
            <iframe
              width="100%"
              height="100%"
              src={currentVideo.url}
              title={currentVideo.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <p>Select a video to watch</p>
          )}
        </div>
      </div>
    </>
  );
};

export default WatchVideo;
