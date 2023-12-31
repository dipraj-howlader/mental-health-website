// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './screens/Home/Home';
import Login from './screens/Login/Login';
import Appointments from './screens/Appointments/Appointments';
import Professionals from './screens/Professionals/Professionals';
import Courses from './screens/Courses/Courses';
import Services from './screens/Services/Services';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/professionals" element={<Professionals />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/login" element={<Login />} />
        <Route path="/services" element={<Services/>} />
       
      </Routes>
    </Router>
  );
};

export default App;
