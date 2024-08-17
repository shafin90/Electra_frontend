import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-dark">
      <Container>
        <Row>
          <Col md={4} sm={12}>
            <h5>About Us</h5>
            <p>
              We are a company dedicated to providing the best services to our customers.
              Our goal is to ensure satisfaction through innovation and dedication.
            </p>
          </Col>
          <Col md={4} sm={12}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </Col>
          <Col md={4} sm={12}>
            <h5>Contact</h5>
            <p>Email: info@company.com</p>
            <p>Phone: +123 456 7890</p>
            <p>Address: 123 Street Name, City, Country</p>
          </Col>
        </Row>
        <Row className="text-center mt-4">
          <Col>
            <p>&copy; {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
