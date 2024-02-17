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
          <div className="ml-auto">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/professionals">
                  Professionals
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/courses">
                  Courses
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blogs">
                  Blogs
                </Link>
              </li>
              <li className="nav-item">
              <Link
  className="nav-link"
  to="/login"
  style={{
    color: 'white',
    background: 'black',
    borderRadius: '15px',
    textAlign: 'center',
    transition: 'background-color 0.3s ease', // Add transition effect
  }}
  // Hover effect styles
  onMouseEnter={(e) => (e.target.style.backgroundColor = '#333')}
  onMouseLeave={(e) => (e.target.style.backgroundColor = 'black')}
>
  Login / Registration
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
