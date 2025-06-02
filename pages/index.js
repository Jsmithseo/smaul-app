import React, { useRef, useState } from 'react';
import { 
  Container, 
  Row, 
  Col, 
  Form, 
  FormGroup, 
  Label, 
  Input, 
  Button 
} from 'reactstrap';
import { FaCamera } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.css';

const SmartHaulFormCamera = () => {
  const fileInputRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    haulingDate: ''
  });
  const [preview, setPreview] = useState(null);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can send `formData` and `preview` to your backend or handle as needed
    console.log('Form Data:', formData);
    console.log('Captured Video:', preview);
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center mb-4">
        <Col md={8}>
          <h2 className="text-center">AI Smart Hauling Request</h2>
          <p className="text-center">
            Fill out your details below and then tap the camera icon to record a quick video of your junk pile.
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
                <FaCamera size={20} style={{ marginRight: '8px' }} />
                Launch Camera
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

            {preview && (
              <div className="mt-4 text-center">
                <h5>Video Preview:</h5>
                <video
                  src={preview}
                  controls
                  style={{ width: '100%', maxWidth: '400px', borderRadius: '10px' }}
                />
              </div>
            )}

            <div className="text-center mt-4">
              <Button color="success" type="submit">
                Submit Request
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SmartHaulFormCamera;
