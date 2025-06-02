import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const MaterialContactform = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(`Form submitted:`, formData);

    const response = await fetch('./api/sendMail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    if (response.status === 200) {
      console.log('Email sent successfully');
      window.location.href = '/thankyou';
    } else {
      console.error('Error sending email');
    }

    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <form>
      <TextField
        label="Name"
        variant="outlined"
        fullWidth
        margin="normal"
        name="name"
        id="name"
        placeholder="Your name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        name="email"
        id="email"
        placeholder="Your email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <TextField
        label="Message"
        variant="outlined"
        fullWidth
        margin="normal"
        name="message"
        id="message"
        placeholder="Your message"
        value={formData.message}
        onChange={handleChange}
        required
      />
      <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default MaterialContactform;
