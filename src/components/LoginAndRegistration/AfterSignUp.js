// AfterSignUp.js
import React from 'react';
import { Link } from 'react-router-dom';
import './AfterSignUp.css'; // Create a separate CSS file for styling

const AfterSignUp = () => {
  return (
    <div className="after-sign-up-container">
      <div className="after-sign-up-content">
        <h1 className="after-sign-up-text">Check your email and verify</h1>
        <p className="after-sign-up-description">We've sent you a verification email. Please check your inbox and follow the instructions to complete the registration.</p>
        <Link to="/" className="redirect-button">Go to Home</Link>
      </div>
    </div>
  );
};

export default AfterSignUp;
