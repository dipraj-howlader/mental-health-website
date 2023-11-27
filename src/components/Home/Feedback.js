import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './Feedback.css';

const Feedback = () => {
  // Sample feedback data
  const feedbacks = [
    {
      id: 1,
      name: 'John Doe',
      comment: 'Unilever believes that when we put our people first, our people will put the business first. Thats why we try to take care of the holistic well-being of our employees. And in this journey, LifeSpring has been a wonderful partner since 2018. They helped us to set up a 24/7 helpline for our employees and their family members. Along with over-the-call counseling, they also arranged many sessions on raising awareness, empathetic leadership, and how to deal with the stress of losing a family member or friend during this pandemic. I am truly grateful to this organization and all its professionals for providing support to our employees & helping them through this difficult time. Thank you, LifeSpring. ',
    },
    {
      id: 2,
      name: 'Jane Smith',
      comment: 'Mental health is very important for all of us, especially today in our modern fast-paced lives. As we struggle with a lot of stress in our daily lives its very important to have a support system like LifeSpring, to help us find answers to the questions we have for ourselves and to be at ease. Having a partnership with LifeSpring & employees of BATB could go through some difficult times during this pandemic. This platform helped us to open up, talk about the problems that we all face, and make it a normal thing so that we can support each other. So, having this kind of support system is vital for all organizations in this day and age. ',
    },
    // Add more feedbacks as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // Set the time interval for automatic change in milliseconds
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Clients Feedback</h2>
      <Slider {...settings}>
        {feedbacks.map((feedback) => (
          <div key={feedback.id} className="feedback-card">
            <p className="comment">{feedback.comment}</p>
            <p className="name">{feedback.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Feedback;
