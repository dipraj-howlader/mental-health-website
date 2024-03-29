// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './screens/Home/Home';
import Login from './screens/Login/Login';
import Appointments from './screens/Appointments/Appointments';
import Professionals from './screens/Professionals/Professionals';
import Courses from './screens/Courses/Courses';
import Services from './screens/Services/Services';
import AfterSignUp from './components/LoginAndRegistration/AfterSignUp';
import BookAppointment from './components/AppointmentAndBooking/BookAppointment';
import ForgotPassword from './components/LoginAndRegistration/ForgotPassword';
import DoctorLogin from './components/LoginAndRegistration/DoctorLogin';
import AdminLogin from './components/LoginAndRegistration/AdminLogin';
import DoctorDashboard from './screens/Doctor/DoctorDashboard';
import AdminDashboard from './screens/Admin/AdminDashboard';
import CoursePurchase from './components/CoursePurchaseAndWatch/CoursePurchase';
import WatchVideo from './components/CoursePurchaseAndWatch/WatchVideo';



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/professionals" element={<Professionals />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/services" element={<Services/>} />
        <Route path="/after-signup" element={<AfterSignUp/>} />
        <Route path="/book-appointment" element={<BookAppointment />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/doctor-login" element={<DoctorLogin />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/purchase-course" element={<CoursePurchase />} />
        <Route path="/watch-video" element={<WatchVideo />} />

       
      </Routes>
    </Router>
  );
};

export default App;
