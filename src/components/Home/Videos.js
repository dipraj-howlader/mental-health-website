import React from 'react';
import Slider from 'react-slick';

import './Videos.css';

const Videos = () => {
  // Sample video data
  const videos = [
    {
      id: 1,
      title: 'Mental Health Awareness Month | Fighting the stigma surrounding',
      videoId: 'ExEXOfe81Nc',
      description: 'May is Mental Health Awareness Month. 11Alive is working to raise awareness about trauma and the impact it can have on...',
    },
    {
      id: 2,
      title: 'Mental Health Awareness',
      videoId: 'y-ACcDIGi-c',
      description: 'Raising the awareness of mental health and how Able Futures ...',
    },
    // Add more videos as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Our Videos</h2>
      <Slider {...settings}>
        {videos.map((video) => (
          <div key={video.id} className="video-card">
            <iframe
              width="100%"
              height="315"
              src={`https://www.youtube.com/embed/${video.videoId}`}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <p className="video-description">{video.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Videos;
