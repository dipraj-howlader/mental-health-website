// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './screens/Home/Home';
import Login from './screens/Login/Login';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
{/* 
        <Route path="/professionals" element={<Professionals />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/courses" element={<Courses />} /> */}
        <Route path="/login" element={<Login />} />

       
      </Routes>
    </Router>
  );
};

export default App;
