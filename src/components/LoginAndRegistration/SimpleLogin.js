// SimpleLogin.js
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './SimpleLogin.css'; // Custom CSS file for additional styling
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { useNavigate } from 'react-router-dom';
import { AuthProvider, useAuth } from '../../AuthContext';
import { Link } from 'react-router-dom';

const firebaseConfig = {
  apiKey: "AIzaSyA-GwYYL6OmcVtvnis68EtCSlJMVePrxAs",
  authDomain: "mental-health-assurance.firebaseapp.com",
  projectId: "mental-health-assurance",
  storageBucket: "mental-health-assurance.appspot.com",
  messagingSenderId: "89700372110",
  appId: "1:89700372110:web:4ed79eebd6397e56c083df"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();

const SimpleLogin = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [showRegistration, setShowRegistration] = useState(false);
  const [loginMessage, setLoginMessage] = useState('');

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
  if (!currentUser) {

  
    const handleLogin = async () => {
      try {
        const userCredential = await auth.signInWithEmailAndPassword(loginEmail, loginPassword);
    
        // Check if the user's email is verified
        if (!userCredential.user.emailVerified) {
          setLoginMessage('Email not verified. Please check your email for verification instructions.');
          return;
        }
    
        // Additional logic after successful login
        console.log('Login successful!');
    
        // Redirect or perform other actions
      } catch (error) {
        // Handle login error
        setLoginMessage('Email or password is wrong. Please try again.');
        console.error('Error logging in:', error.message);
      }
    };
    

    const handleRegistration = async () => {
      try {
        const userCredential = await auth.createUserWithEmailAndPassword(
          registrationData.email,
          registrationData.password
        );
    
        // Send email verification
        await userCredential.user.sendEmailVerification();
    
        // Use onIdTokenChanged to get notified when the user's ID token changes
        const unsubscribe = auth.onIdTokenChanged(async (user) => {
          if (user) {
            await user.reload();
            if (user.emailVerified) {
              // The email has been verified, set the email in AuthProvider
              const authProvider = new AuthProvider();
              authProvider.setEmail(registrationData.email);
    
              // Redirect user to the "AfterSignUp.js" component
              navigate('/after-signup');
            }
          }
        });
    
        return unsubscribe;
      } catch (error) {
        console.error('Error registering:', error.message);
      }
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

        {loginMessage && (
          <p className={`login-message ${loginMessage.includes('successful') ? 'success' : 'error'}`}>
            {loginMessage}
          </p>
        )}
              </Form>
            )}

            <div className="text-center mt-3">
             if(user.emailVerified)  {showRegistration ? (
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
              }
          else{
            const handleLogout = async () => {
              try {
                // Log out the user using Firebase
                await auth.signOut();
                console.log('User logged out successfully');
              } catch (error) {
                console.error('Error logging out:', error.message);
              }
            };

            return(
              <div style={{textAlign:'center',paddingTop:'150px'}}>
            <h1 >You have currently logged in as , {currentUser.email}!</h1>
            <Link to="/" className="redirect-button" style={{backgroundColor:'green'}}>Go to Home</Link>
            <br></br>
            <Link className="redirect-button" onClick={handleLogout}>Log Out</Link>
            </div>
            )
          }
};

export default SimpleLogin;
