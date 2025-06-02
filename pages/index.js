import React, { useRef, useState } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

const CameraLaunch = () => {
  const fileInputRef = useRef(null);
  const [preview, setPreview] = useState(null);

  const handleLaunchCamera = () => {
    // Programmatically click the hidden file input to open the camera
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleImageCapture = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Create a preview URL for the captured image
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <Container className="py-5">
      <Row className="mb-4">
        <Col className="text-center">
          <h2>Smart Hauling AI App</h2>
          <p>Tap the button below to launch your camera and scan your junk pile.</p>
          <Button color="primary" onClick={handleLaunchCamera}>
            Launch Camera
          </Button>

          {/* 
            Hidden file input.
            - accept="image/*" restricts to images.
            - capture="environment" forces the back camera on most mobile devices.
          */}
          <input
            type="file"
            accept="image/*"
            capture="environment"
            ref={fileInputRef}
            onChange={handleImageCapture}
            style={{ display: 'none' }}
          />

          {preview && (
            <div className="mt-4">
              <h5>Preview:</h5>
              <img
                src={preview}
                alt="Captured preview"
                style={{ width: '100%', maxWidth: '400px', borderRadius: '10px' }}
              />
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default CameraLaunch;
