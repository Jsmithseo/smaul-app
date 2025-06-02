import React from 'react';
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';

const HowItWorks = () => {
  return (
    <Card className="my-4" style={{ border: 'none', boxShadow: 'none' }}>
      <CardBody className="text-center">
        <CardTitle tag="h2">How It Works</CardTitle>
        <CardText>
          At Onyx Creative Labs, we provide high-quality React development services by leveraging the skills of our students who are eager to gain real-world experience. Our unique approach ensures your project is handled with care, expertise, and a fresh perspective.
        </CardText>
        <Button color="primary" href="/how-it-works" style={{ boxShadow: 'none' }}>
          Learn More
        </Button>
      </CardBody>
    </Card>
  );
};

export default HowItWorks;
