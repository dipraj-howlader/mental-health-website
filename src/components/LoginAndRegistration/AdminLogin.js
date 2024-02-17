import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbarr from '../Home/Navbarr';
import './AdminLogin.css'; // Custom CSS file for additional styling

const AdminLogin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track authentication status

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin') {
      // If username and password match, set authentication status to true
      setIsLoggedIn(true);
      navigate('/admin-dashboard');
    } else {
      // If username and password do not match, display error message
      setErrorMessage('Incorrect Username or Password');
    }
  };

  return (
    <div>
      <Navbarr />
      <div className="login-container">
        <h2 className="text-center">Admin Login</h2>
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button type="button" className="btn btn-primary btn-block" onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
