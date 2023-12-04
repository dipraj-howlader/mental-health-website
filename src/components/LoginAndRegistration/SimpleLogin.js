// SimpleLogin.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './SimpleLogin.css'; // Custom CSS file for additional styling

const SimpleLogin = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [showRegistration, setShowRegistration] = useState(false);

  const [registrationData, setRegistrationData] = useState({
    fullName: '',
    dob: '',
    gender: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    medicalHistory: '',
    termsAgreement: false,
  });

  const handleLogin = () => {
    console.log('Login Email:', loginEmail);
    console.log('Login Password:', loginPassword);
    // Add logic for handling login (e.g., send request to backend)
  };

  const handleRegistration = () => {
    console.log('Registration Data:', registrationData);
    // Add logic for handling registration (e.g., send request to backend)
  };

  const handleToggleForm = () => {
    setShowRegistration(!showRegistration);
  };

  return (
    <Container className={`login-container ${showRegistration ? 'show-registration' : ''}`}>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <div className="login-card">
            <h2 className="text-center">{showRegistration ? 'Register' : 'Login'}</h2>
            {showRegistration ? (
              <Form>
                <Form.Group controlId="formFullName">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your full name"
                    value={registrationData.fullName}
                    onChange={(e) => setRegistrationData({ ...registrationData, fullName: e.target.value })}
                  />
                </Form.Group>

                <Form.Group controlId="formDob">
                  <Form.Label>Date of Birth</Form.Label>
                  <Form.Control
                    type="date"
                    value={registrationData.dob}
                    onChange={(e) => setRegistrationData({ ...registrationData, dob: e.target.value })}
                  />
                </Form.Group>

                <Form.Group controlId="formGender">
                  <Form.Label>Gender</Form.Label>
                  <Form.Control
                    as="select"
                    value={registrationData.gender}
                    onChange={(e) => setRegistrationData({ ...registrationData, gender: e.target.value })}
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    value={registrationData.email}
                    onChange={(e) => setRegistrationData({ ...registrationData, email: e.target.value })}
                  />
                </Form.Group>

                <Form.Group controlId="formPhone">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="Enter your phone number"
                    value={registrationData.phone}
                    onChange={(e) => setRegistrationData({ ...registrationData, phone: e.target.value })}
                  />
                </Form.Group>

                <Form.Group controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter your password"
                    value={registrationData.password}
                    onChange={(e) => setRegistrationData({ ...registrationData, password: e.target.value })}
                  />
                </Form.Group>

                <Form.Group controlId="formConfirmPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirm your password"
                    value={registrationData.confirmPassword}
                    onChange={(e) => setRegistrationData({ ...registrationData, confirmPassword: e.target.value })}
                  />
                </Form.Group>

                <Form.Group controlId="formMedicalHistory">
                  <Form.Label>Medical History</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="Enter any relevant medical history or conditions"
                    value={registrationData.medicalHistory}
                    onChange={(e) => setRegistrationData({ ...registrationData, medicalHistory: e.target.value })}
                  />
                </Form.Group>

                <Form.Group controlId="formTermsAgreement" className="mt-3">
                  <Form.Check
                    type="checkbox"
                    label="I agree to the terms and conditions"
                    checked={registrationData.termsAgreement}
                    onChange={() => setRegistrationData({ ...registrationData, termsAgreement: !registrationData.termsAgreement })}
                  />
                </Form.Group>

                <Button variant="primary" onClick={handleRegistration} className="mt-3">
                  Register Now
                </Button>
              </Form>
            ) : (
              <Form>
                {/* Login Fields */}
                <Form.Group controlId="formLoginEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="formLoginPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter your password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                  />
                </Form.Group>

                <Button variant="primary" onClick={handleLogin} style={{ marginTop: '10px' }}>
                  Login
                </Button>
              </Form>
            )}

            <div className="text-center mt-3">
              {showRegistration ? (
                <>
                  Already registered?{' '}
                  <span className="login-link" onClick={handleToggleForm}>
                    Login Now
                  </span>
                </>
              ) : (
                <>
                  Not a member yet?{' '}
                  <span className="register-link" onClick={handleToggleForm}>
                    Register Now
                  </span>
                </>
              )}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SimpleLogin;
