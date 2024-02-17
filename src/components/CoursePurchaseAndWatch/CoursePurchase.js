import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Modal } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import './CoursePurchase.css';

const CoursePurchase = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [paymentError, setPaymentError] = useState(null);
  const [paymentConfirmed, setPaymentConfirmed] = useState(false); // State to track payment confirmation

  const course = location.state.course;

  const handlePurchase = async () => {
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet.
      return;
    }

    // Create a PaymentMethod using the card element.
    const cardElement = elements.getElement(CardElement);

    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.error(error);
      setPaymentError(error.message);
    } else {
      // Payment successful
      console.log('PaymentMethod:', paymentMethod);

      // Handle purchase logic here
      console.log('Purchase:', { name, address, email, paymentMethod });

      // Set payment confirmation
      setPaymentConfirmed(true);
    }
  };

  const handleWatchVideo = () => {
    // Redirect to watch video page
    navigate('/watch-video');
  };

  return (
    <Container className="course-purchase-container">
      <h1 className="text-center mb-4">Purchase Course</h1>

      <Row className="justify-content-md-center">
        <Col md={6}>
          <div className="course-details">
            <h2>{course.name}</h2>
            <p>Price: {course.price}</p>
          </div>
          {!paymentConfirmed ? ( // Show purchase form if payment is not confirmed
            <Form>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="address">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="cardNumber">
                <Form.Label>Card Number</Form.Label>
                <CardElement options={{ style: { base: { fontSize: '16px' } } }} />
              </Form.Group>

              {paymentError && <p className="text-danger">{paymentError}</p>}

              <Button style={{marginTop:'15px'}} variant="primary" onClick={handlePurchase}>
                Confirm Purchase
              </Button>
            </Form>
          ) : ( // Show payment confirmation message and watch video button if payment is confirmed
            <div className="payment-confirmation">
              <p>Payment Confirmed!</p>
              <Button variant="primary" onClick={handleWatchVideo}>
                Watch Video
              </Button>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default CoursePurchase;
