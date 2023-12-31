// CarouselHome.js
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CarouselHome.css'; // Import the CSS file

import image1 from '../../ExampleCarouselImage/1.jpg';
import image2 from '../../ExampleCarouselImage/2.jpg';
import image3 from '../../ExampleCarouselImage/3.jpg';
import image4 from '../../ExampleCarouselImage/4.jpg';

const CarouselHome = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  const introText = "Find and book the best doctors for you....";
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTypedText((prevText) => {
        if (prevText.length === introText.length) {
          return '';
        }
        return introText.substr(0, prevText.length + 1);
      });
    }, 200);

    return () => clearInterval(intervalId);
  }, [introText]);

  return (
    <div className="mt-4">
      <h1 className="typed-text">{typedText}.</h1>
      <Slider {...settings}>
        {/* Poster Slides */}
        <div>
          <img src={image4} alt="Poster 1" className="carousel-image" />
        </div>
        <div>
          <img src={image1} alt="Poster 2" className="carousel-image" />
        </div>
        <div>
          <img src={image3} alt="Poster 3" className="carousel-image" />
        </div>
        <div>
          <img src={image2} alt="Poster 4" className="carousel-image" />
        </div>
      </Slider>
    </div>
  );
};

export default CarouselHome;
