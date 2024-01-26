import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Form, Modal } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { PDFDownloadLink, PDFViewer } from '@react-pdf-viewer/core';
import { saveAs } from 'file-saver';
import AppointmentPDF from './AppointmentPDF'; // Create a new component for the PDF content

const BookAppointment = () => {
    const [selectedProfessional, setSelectedProfessional] = useState(null);
    const [patientName, setPatientName] = useState('');
    const [patientAge, setPatientAge] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [appointmentDate, setAppointmentDate] = useState('');
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
        // Implement logic to send the token and appointment details to your server for server-side processing.
        console.log('Token:', token);
        console.log('Appointment Details:', { patientName, patientAge, mobileNumber, appointmentDate });
  
        // Show success modal
        setShowSuccessModal(true);
      }

    // Generate PDF content
    const pdfContent = (
      <AppointmentPDF
        patientName={patientName}
        appointmentDate={appointmentDate}
        mobileNumber={mobileNumber}
        doctorName={selectedProfessional.name}
        specialist={selectedProfessional.specialist}
        // Add other necessary props
      />
    );

    // Convert PDF content to Blob
    const blob = await pdf(pdfContent).toBlob();

    // Save the PDF file
    saveAs(blob, 'AppointmentConfirmation.pdf');

    // Show success modal
    setShowSuccessModal(true);
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

                {/* Patient Details Form */}
                <Form>
                  {/* ... (your existing form fields) */}

                  {/* Payment Form */}
                  <Form.Group controlId="cardNumber">
                    <Form.Label>Card Number</Form.Label>
                    <CardElement options={{ style: { base: { fontSize: '16px' } } }} />
                  </Form.Group>

                  <Button variant="primary" onClick={handleConfirmAppointment}>
                    Confirm Booking
                  </Button>

                  {/* PDF Download Link */}
                  <PDFDownloadLink document={<AppointmentPDF {...appointmentData} />} fileName="AppointmentConfirmation.pdf">
                    {({ blob, url, loading, error }) =>
                      loading ? 'Loading document...' : 'Download PDF'
                    }
                  </PDFDownloadLink>
                </Form>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>

      {/* Success Modal */}
      <Modal show={showSuccessModal} onHide={() => setShowSuccessModal(false)}>
        {/* ... (your existing success modal code) */}
      </Modal>

      {/* Failure Modal */}
      <Modal show={showFailureModal} onHide={() => setShowFailureModal(false)}>
        {/* ... (your existing failure modal code) */}
      </Modal>
    </Container>
  );
};

export default BookAppointment;
