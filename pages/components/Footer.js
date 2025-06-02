import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4" style={{ paddingTop: '10px' }}>
      <Container>
        <Row>
          <Col md="4">
            <h5>About Silicon Island Vallejo</h5>
            <p>
            </p>
          </Col>
          <Col md="4">
            {/* <h5>Quick Links</h5>
            <ul className="list-unstyled">
            <li><a href="/apprenticeship" className="text-white">Apprenticeship Program</a></li>
            <li><a href="/donate" className="text-white">Donate</a></li>
              <li><a href="/laptop-donation" className="text-white">Laptop Donation</a></li>
              <li><a href="/community" className="text-white">Join Slack Community</a></li>
              <li><a href="/tax-form" className="text-white">Request Tax Information</a></li>  
              <li><a href="/optin" className="text-white">Opt In</a></li> 
              <li><a href="/privacy" className="text-white">Privacy</a></li>             
            </ul> */}
          </Col>
          <Col md="4">
            <h5>Contact Us</h5>
            <p>
              Email: info@siliconislandvallejo.com
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-4">
            <p>&copy; {new Date().getFullYear()} Silicon Island Vallejo. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
