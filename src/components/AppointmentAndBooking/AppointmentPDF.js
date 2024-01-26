import React from 'react';
import { Container, Button } from 'react-bootstrap';
import jsPDF from 'jspdf';

const AppointmentPDF = ({ location }) => {
  // Extract appointment details from location state
  const appointmentDetails = location.state.appointmentDetails;

  // Generate PDF content
  const pdfContent = `
    Patient Name: ${appointmentDetails.patientName}
    Appointment Date: ${appointmentDetails.appointmentDate}
    Mobile Number: ${appointmentDetails.mobileNumber}
    Doctor Name: ${appointmentDetails.doctorName}
    Specialist: ${appointmentDetails.specialist}
    // Add other necessary details
  `;

  // Generate PDF using jsPDF
  const pdf = new jsPDF();
  pdf.text(pdfContent, 20, 20);

  // Save the PDF file
  const savePdf = () => {
    pdf.save('AppointmentConfirmation.pdf');
  };

  return (
    <Container className="text-center">
      <h1>Appointment Confirmation</h1>
      <p>Review your appointment details and download the confirmation.</p>

      {/* Display appointment details */}
      <div className="text-left">
        <pre>{pdfContent}</pre>
      </div>

      {/* Download PDF button */}
      <Button variant="primary" onClick={savePdf}>
        Download Confirmation
      </Button>
    </Container>
  );
};

export default AppointmentPDF;
