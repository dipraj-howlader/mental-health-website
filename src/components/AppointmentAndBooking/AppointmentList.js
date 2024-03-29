import React, { useState } from 'react';
import { Card, Button, Container, Row, Col, Form } from 'react-bootstrap';
import './AppointmentList.css'; // Custom CSS file for additional styling
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthContext';
import image1 from '../../professionalsImage/1.jpeg';
import image2 from '../../professionalsImage/2.jpeg';
import image3 from '../../professionalsImage/3.jpeg';
import image4 from '../../professionalsImage/4.jpeg';
import image5 from '../../professionalsImage/5.jpeg';
import image6 from '../../professionalsImage/6.jpeg';
import image7 from '../../professionalsImage/7.jpeg';
import image8 from '../../professionalsImage/8.jpeg';
import image9 from '../../professionalsImage/9.jpeg';


const AppointmentList = () => {

  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const [searchName, setSearchName] = useState('');
  const [searchDepartment, setSearchDepartment] = useState('');

  // Sample data for professionals
  const professionalsData = [
    {
      id: 1,
      name: 'Dr. John Doe',
      specialist: 'Psychiatrist',
      photo: image1,
      fee: 500,
      email: 'rajdiponly36@gmail.com'
    },
    {
      id: 2,
      name: 'Dr. Jane Smith',
      specialist: 'Clinical Psychologist',
      photo: image2,
      fee: 1000,
      email: 'rajdiponly36@gmail.com'
    },
    {
      id: 3,
      name: 'Dr. Mark Johnson',
      specialist: 'Counseling Psychologist',
      photo: image3,
      fee: 1200,
      email: 'rajdiponly36@gmail.com'
    },
    {
      id: 4,
      name: 'Dr. Emily Davis',
      specialist: 'Child Psychologist',
      photo: image4,
      fee: 1500,
      email: 'rajdiponly36@gmail.com'
    },
    {
      id: 5,
      name: 'Dr. Robert White',
      specialist: 'Neuropsychologist',
      photo: image5,
      fee: 100,
      email: 'rajdiponly36@gmail.com'
    },
    {
      id: 6,
      name: 'Dr. Sarah Miller',
      specialist: 'Sports Psychologist',
      photo: image6,
      fee: 100,
      email: 'rajdiponly36@gmail.com'
    },
    {
      id: 7,
      name: 'Dr. Michael Brown',
      specialist: 'Forensic Psychologist',
      photo: image7,
      fee: 100,
      email: 'rajdiponly36@gmail.com'
    },
    {
      id: 8,
      name: 'Dr. Lisa Taylor',
      specialist: 'Health Psychologist',
      photo: image8,
      fee: 100,
      email: 'rajdiponly36@gmail.com'
    },
    {
      id: 9,
      name: 'Dr. Kevin Turner',
      specialist: 'Educational Psychologist',
      photo: image9,
      fee: 100,
      email: 'rajdiponly36@gmail.com'
    },
  ];
  

  const filteredProfessionals = professionalsData.filter((professional) => {
    const nameMatch = professional.name.toLowerCase().includes(searchName.toLowerCase());
    const departmentMatch = professional.specialist.toLowerCase().includes(searchDepartment.toLowerCase());
    return nameMatch && departmentMatch; // Change from '&&' to '||'
  });
  

  const handleReset = () => {
    setSearchName('');
    setSearchDepartment('');
  };

  const handleBookAppointment = (professionalData) => {
    console.log(professionalData)
    if (currentUser) {
      // User is logged in, navigate to checkout
      navigate('/book-appointment', { state: { professionalData } });
    } else {
      // User is not logged in, navigate to login and then to checkout
      navigate('/login');
    }
  };

  return (
    <Container className="appointment-list-container">
      <h1 className="text-center mb-4">Meet Our Professionals</h1>

      {/* Search Form */}
      <Form className="mb-4">
        <Row>
          <Col md={4} sm={6} xs={12} className="mb-2">
            <Form.Control
              type="text"
              placeholder="Search by Name"
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
            />
          </Col>
          <Col md={4} sm={6} xs={12} className="mb-2">
            <Form.Control
              type="text"
              placeholder="Search by Department"
              value={searchDepartment}
              onChange={(e) => setSearchDepartment(e.target.value)}
            />
          </Col>
          <Col md={2} sm={6} xs={12} className="mb-2">
            <Button variant="secondary" onClick={handleReset}>
              Reset
            </Button>
          </Col>
        </Row>
      </Form>

      {/* Display Cards */}
      <Row>
        {filteredProfessionals.map((professional) => (
          <Col key={professional.id} md={3} sm={6} xs={12} className="mb-4">
            <Card>
              <Card.Img variant="top" src={professional.photo} alt={professional.name} />
              <Card.Body>
                <Card.Title>{professional.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{professional.specialist}</Card.Subtitle>
                <Button variant="primary" onClick={() => handleBookAppointment(professional)}> Book An Appointment
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AppointmentList;
