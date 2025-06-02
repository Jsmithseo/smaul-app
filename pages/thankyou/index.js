import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Button } from 'reactstrap';
import Image from 'next/image';
import BaseLayout from '../components/layouts/BaseLayouts';
import Link from 'next/link';

const MainStyle = {
  overflowX: 'hidden',
  backgroundColor: '#f8f9fa',
  padding: '50px 0',
};

const copyStyle = {
  fontSize: '24px',
  fontFamily: 'avenir',
  textAlign: 'center',
  color: '#333',
  marginBottom: '20px',
};

const buttonStyle = {
  display: 'block',
  margin: '20px auto',
  padding: '10px 30px',
  backgroundColor: '#007bff',
  color: '#fff',
  borderRadius: '5px',
  fontSize: '18px',
  fontFamily: 'avenir',
  textAlign: 'center',
  textDecoration: 'none',
};

const imageStyle = {
  display: 'block',
  margin: '0 auto 20px',
};

export default function Thankyou() {
  useEffect(() => {
    // Google event snippet for conversion tracking
    window.gtag('event', 'conversion', { 'send_to': 'AW-16644561919/yx4DCJzujcMZEP-334A-' });
  }, []);

  return (
    <BaseLayout>
      <div style={MainStyle}>
        <Container>
          <Row>
            <Col md="12">

              <div style={copyStyle}>
                Thank you for reaching out! We'll be in touch with you soon.
              </div>
              <div style={copyStyle}>
                In the meantime, feel free to explore more of our services or check out our latest blog posts.
              </div>
              <Link href="/" style={buttonStyle}>
                Explore Our Services
              </Link>
              <Link href="/" style={buttonStyle}>
                Read Our Blog
              </Link>
            </Col>
          
          </Row>
          <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <br></br>
            <br></br>
            <br></br>        </Container>
      </div>
    </BaseLayout>
  );
}
