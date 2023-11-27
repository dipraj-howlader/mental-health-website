import React from 'react';
import { Link } from 'react-router-dom';

const Navbarr = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#00bcd4' }}>
        <div className="container">
          <Link className="navbar-brand" to="/">
            Safental.Com
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/professionals">
                  Professionals
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/appointments">
                  Appointments
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/courses">
                  Courses
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login" style={{ color: 'white', background: 'black', borderRadius: '15px' }}>
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbarr;
