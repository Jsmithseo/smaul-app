import React, { useRef, useState } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Spinner,
  Alert
} from 'reactstrap';
import { FaVideo } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.css';

const VideoCaptureForm = () => {
  const fileInputRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    haulingDate: ''
  });
  const [videoBlob, setVideoBlob] = useState(null);
  const [videoPreview, setVideoPreview] = useState(null);
  const [aiResult, setAiResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Update form text fields
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Open the device's video recorder
  const handleLaunchCamera = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // Handle the recorded video file
  const handleVideoCapture = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('video/')) {
      setVideoBlob(file);
      setVideoPreview(URL.createObjectURL(file));
    }
  };

  // Submit form + video to backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!videoBlob) {
      setError('Please record a short video of your junk pile.');
      return;
    }
    setError(null);
    setLoading(true);
    setAiResult(null);

    try {
      // 1) Build FormData
      const payload = new FormData();
      payload.append('name', formData.name);
      payload.append('phone', formData.phone);
      payload.append('address', formData.address);
      payload.append('haulingDate', formData.haulingDate);
      payload.append('video', videoBlob);

      // 2) POST to /api/upload-video
      const response = await fetch('/api/upload-video', {
        method: 'POST',
        body: payload
      });

      if (!response.ok) {
        throw new Error(`Upload failed: ${response.statusText}`);
      }

      // 3) Parse JSON
      const resultJson = await response.json();
      setAiResult(resultJson);
    } catch (err) {
      console.error(err);
      setError('There was an error uploading or processing your video.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center mb-4">
        <Col md={8}>
          <h2 className="text-center">AI Smart Hauling Request</h2>
          <p className="text-center">
            Fill out your details below and then tap the video icon to record a quick clip of your junk pile.
            Our AI will analyze the footage and instantly estimate your hauling cost.
          </p>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="name">Full Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleFormChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="phone">Phone Number</Label>
              <Input
                type="tel"
                name="phone"
                id="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleFormChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="address">Pickup Address</Label>
              <Input
                type="text"
                name="address"
                id="address"
                placeholder="Enter your address"
                value={formData.address}
                onChange={handleFormChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="haulingDate">Preferred Hauling Date</Label>
              <Input
                type="date"
                name="haulingDate"
                id="haulingDate"
                value={formData.haulingDate}
                onChange={handleFormChange}
                required
              />
            </FormGroup>

            <div className="text-center mt-4">
              <Button color="primary" onClick={handleLaunchCamera}>
                <FaVideo size={20} style={{ marginRight: '8px' }} />
                Launch Video Recorder
              </Button>
              <input
                type="file"
                accept="video/*"
                capture="environment"
                ref={fileInputRef}
                onChange={handleVideoCapture}
                style={{ display: 'none' }}
              />
            </div>

            {videoPreview && (
              <div className="mt-4 text-center">
                <h5>Video Preview:</h5>
                <video
                  src={videoPreview}
                  controls
                  style={{ width: '100%', maxWidth: '400px', borderRadius: '10px' }}
                />
              </div>
            )}

            <div className="text-center mt-4">
              <Button color="success" type="submit" disabled={loading}>
                {loading ? (
                  <>
                    <Spinner size="sm" color="light" /> Processing…
                  </>
                ) : (
                  'Submit Request'
                )}
              </Button>
            </div>
          </Form>

          {error && (
            <Alert color="danger" className="mt-4 text-center">
              {error}
            </Alert>
          )}

          {aiResult && (
            <div className="mt-5">
              <h4>AI Estimate Result:</h4>
              <p><strong>Estimated Cost:</strong> ${aiResult.estimate.toFixed(2)}</p>
              <p><strong>Detected Items:</strong> {aiResult.objects.join(', ')}</p>
              {aiResult.message && <p><em>{aiResult.message}</em></p>}
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default VideoCaptureForm;
