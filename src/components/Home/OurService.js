import React from 'react';
import './Ourservice.css';

import image1 from '../../images/a.png';
import image2 from '../../images/b.png';
import image3 from '../../images/c.png';

const OurService = () => {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Our Services</h2>
      <div className="row">
        {/* Service Card 1 */}
        <div className="col-md-4 mb-4">
          <div className="card text-center service-card">
            <img src={image1} className="card-img-top service-img" alt="Service 1" />
            <div className="card-body">
              <h3 className="card-title">Psychological Counselling</h3>
              <p className="card-text">Here we provide all kind of mental support and prevent suicide.</p>
              <a href="#" className="btn btn-primary btn-learn-more">Learn More</a>
            </div>
          </div>
        </div>

        {/* Service Card 2 */}
        <div className="col-md-4 mb-4">
          <div className="card text-center service-card">
            <img src={image2} className="card-img-top service-img" alt="Service 2" />
            <div className="card-body">
              <h3 className="card-title">Corporate Services</h3>
              <p className="card-text">Here we provide the corporate mental health problems and good environment for offices.</p>
              <a href="#" className="btn btn-primary btn-learn-more">Learn More</a>
            </div>
          </div>
        </div>

        {/* Service Card 3 */}
        <div className="col-md-4 mb-4">
          <div className="card text-center service-card">
            <img src={image3} className="card-img-top service-img" alt="Service 3" />
            <div className="card-body">
              <h3 className="card-title">Children Development</h3>
              <p className="card-text">Children services and care about their mental health.</p>
              <a href="#" className="btn btn-primary btn-learn-more">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurService;
