// ForgotPassword.js
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import firebase from 'firebase/compat/app';
import './ForgotPassword.css';
import 'firebase/compat/auth';
import Navbarr from '../Home/Navbarr';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleForgotPassword = async () => {
    try {
      await firebase.auth().sendPasswordResetEmail(email);
      setMessage('Password reset email sent. Please check your email.');
    } catch (error) {
      setMessage('Failed to send password reset email. Please try again.');
      console.error('Error sending password reset email:', error.message);
    }
  };

  return (<>
    <Navbarr></Navbarr>
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <div className="forgot-password-card">
            <h2 className="text-center">Forgot Password</h2>
            <Form>
              <Form.Group controlId="formForgotPasswordEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Button variant="primary" onClick={handleForgotPassword} className="mt-3">
                Send Email
              </Button>

              {message && <p className="forgot-password-message">{message}</p>}
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default ForgotPassword;
