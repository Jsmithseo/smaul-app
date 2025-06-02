import React, { useRef, useState } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { FaCamera } from 'react-icons/fa'; 
import 'bootstrap/dist/css/bootstrap.css';

const VideoLaunch = () => {
  const fileInputRef = useRef(null);
  const [preview, setPreview] = useState(null);

  const handleLaunchCamera = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleVideoCapture = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('video/')) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <Container className="py-5">
      <Row className="mb-4">
        <Col className="text-center">
          <h2>Smart Hauling AI App</h2>
          <p>Tap the button below to launch your camera and record a quick video of your junk pile.</p>

          <Button color="primary" onClick={handleLaunchCamera}>
            <FaCamera size={20} style={{ marginRight: '8px' }} />
            Scan Haul
          </Button>

          {/* Hidden file input configured for video capture */}
          <input
            type="file"
            accept="video/*"
            capture="environment"
            ref={fileInputRef}
            onChange={handleVideoCapture}
            style={{ display: 'none' }}
          />

          {preview && (
            <div className="mt-4">
              <h5>Video Preview:</h5>
              <video
                src={preview}
                controls
                style={{ width: '100%', maxWidth: '400px', borderRadius: '10px' }}
              />
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default VideoLaunch;
