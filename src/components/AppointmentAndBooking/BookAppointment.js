import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Form, Modal } from 'react-bootstrap';
import './BookAppointment.css'; // Custom CSS for additional styling
import { useLocation, useNavigate } from 'react-router-dom';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

const BookAppointment = () => {
  const [selectedProfessional, setSelectedProfessional] = useState(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showFailureModal, setShowFailureModal] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state && location.state.professionalData) {
      setSelectedProfessional(location.state.professionalData);
    }
  }, [location.state]);

  const handleConfirmAppointment = async () => {
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet.
      return;
    }

    // Create a PaymentMethod using the card element.
    const cardElement = elements.getElement(CardElement);

    const { token, error } = await stripe.createToken(cardElement);

    if (error) {
      console.error(error);

      // Show failure modal in case of an error
      setShowFailureModal(true);
    } else {
      // Implement logic to send the token to your server for server-side payment processing.
      console.log('Token:', token);

      // You can use the token to perform server-side payment processing.
      // Pass the token to your server along with other relevant information (e.g., professional ID).
      // Server-side logic will handle the payment processing securely.

      // Show success modal
      setShowSuccessModal(true);
    }
  };

  const handleBackToMainMenu = () => {
    // Redirect to the main menu or home page
    navigate('/');
  };

  return (
    <Container className="book-appointment-container">
      <h1 className="text-center mb-4">Confirm Your Appointment</h1>

      <Row className="justify-content-md-center">
        <Col md={6}>
          {selectedProfessional && (
            <Card>
              <Card.Body>
                <Card.Title>{selectedProfessional.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{selectedProfessional.specialist}</Card.Subtitle>
                <Card.Text>
                  <strong>Appointment Fee:</strong> ${selectedProfessional.fee}
                </Card.Text>

                {/* Payment Form */}
                <Form>
                  <Form.Group controlId="cardNumber">
                    <Form.Label>Card Number</Form.Label>
                    <CardElement options={{ style: { base: { fontSize: '16px' } } }} />
                  </Form.Group>

                  <Button variant="primary" onClick={handleConfirmAppointment}>
                    Confirm Booking
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>

      {/* Success Modal */}
      <Modal show={showSuccessModal} onHide={() => setShowSuccessModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Payment Successful</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Your payment was successful! Thank you for booking with us.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleBackToMainMenu}>
            Back to Main Menu
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Failure Modal */}
      <Modal show={showFailureModal} onHide={() => setShowFailureModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Payment Failure</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          There was an error processing your payment. Please try again or contact support.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setShowFailureModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default BookAppointment;
