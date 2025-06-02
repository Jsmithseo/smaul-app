import React from 'react';
import { Container, Typography, Grid, Card, CardMedia } from '@mui/material';

const clientLogos = [
  { title: 'Client 1', image: 'logo1.png' },
  { title: 'Client 3', image: 'logo3.svg' },
  { title: 'Client 4', image: 'logo4.svg' },
];

function ClientLogos() {
  return (
    <Container
      maxWidth="lg"
      style={{ marginTop: '40px', marginBottom: '40px' }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        Our Clients
      </Typography>
      <Grid container spacing={4}>
        {clientLogos.map((client, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '20px',
              }}
            >
              <CardMedia
                component="img"
                image={client.image}
                alt={client.title}
                style={{ maxWidth: '100%', maxHeight: '100px' }}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ClientLogos;
