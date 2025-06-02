import React from 'react';
import BaseLayout from '../components/layouts/BaseLayouts';
import ContactForm from '../components/ContactUsform';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
  return (
    <div
      style={{
        backgroundColor: '#f8f9fa', // Light gray background
        color: '#000',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <BaseLayout>
        <div className="container-fluid" style={{ padding: '40px 20px' }}>
          <div className="row">
            <div className="col-lg-12">
              <div
                className="contactHeadline"
                style={{
                  fontSize: '42px',
                  fontWeight: '700',
                  textAlign: 'center',
                  marginBottom: '20px',
                  color: '#000', // Black text for contrast
                }}
              >
                Ready to Start Your Next Project?
              </div>
              <p style={{ textAlign: 'center', fontSize: '18px', marginBottom: '50px', color: '#333' }}>
                Whether you're looking to build a new website, enhance your digital marketing, or develop a custom web application, our team is here to help. 
                Reach out today, and let's bring your vision to life.
              </p>
            </div>
            <div className="col-lg-12">
              <div
                className="contact-form"
                style={{
                  background: '#fff', // White background for form
                  padding: '30px',
                  borderRadius: '10px',
                  boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)', // Lighter shadow for light background
                }}
              >
                {/* <h3 style={{ textAlign: 'center', marginBottom: '20px', fontSize: '24px', fontWeight: '600', color: '#000' }}>
                  Contact Us to Get Started
                </h3> */}
                <ContactForm />
              </div>
            </div>
            <div className="col-lg-12" style={{ marginTop: '30px' }}>
              <div
                style={{
                  textAlign: 'center',
                  padding: '20px',
                  borderRadius: '10px',
                  color: '#000',
                  fontSize: '18px',
                }}
              >
                <p>
                  Have specific questions or want to discuss your project in detail? Feel free to contact us at <a href="mailto:jeremy@onyxcreativelabs.com" style={{ color: '#007bff' }}>jeremy@onyxcreativelabs.com</a> or call us directly at <a href="tel:+5109257174" style={{ color: '#007bff' }}>510-925-7174</a>.
                </p>
                <p>
                  We're excited to partner with you and turn your ideas into reality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </BaseLayout>
    </div>
  );
};

export default Contact;
