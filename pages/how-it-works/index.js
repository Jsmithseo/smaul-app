import React from 'react'
import Link from 'next/link'
import BaseLayout from '../components/layouts/BaseLayouts'
import { Container, Row, Col, Button, Card, CardBody, CardTitle, CardText } from 'reactstrap';

const HowItWorks = () => {
    return (

        <>
        <BaseLayout>
        <Container className="my-5">
        <Row className="mb-4">
          <Col>
            <h1>How It Works</h1>
            <p>
              At Onyx Creative Labs, we provide high-quality marketing and web development services by leveraging the skills of our students who are eager to gain real-world experience. Our unique approach ensures your project is handled with care, expertise, and a fresh perspective.
            </p>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col>
            <Card>
              <CardBody>
                <CardTitle tag="h3">Our Team Structure</CardTitle>
                <CardText>
                  Our students are grouped into teams of three, each led by a mentor with over 10 years of industry experience. All students in the cohort have at least one year of React experience, ensuring a solid foundation in modern development practices. This collaborative environment allows students to tackle real market cases while ensuring your project benefits from a blend of fresh ideas and seasoned expertise.
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col>
            <Card>
              <CardBody>
                <CardTitle tag="h3">What We Handle</CardTitle>
                <CardText>
                  We cover everything your React-based project might require, from handling complex login and data management issues to integrating essential martech tools like HubSpot, Salesforce, Shopify, and Marketo. Our teams are equipped to manage all aspects of a company's React website, ensuring seamless operation and user satisfaction. Whether it’s user management, product feature development, or any other challenge, we’ve got it covered.
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col>
            <Card>
              <CardBody>
                <CardTitle tag="h3">Real Market Impact</CardTitle>
                <CardText>
                  By partnering with Onyx Creative Labs, your project becomes a real-world case study for our students, providing them with invaluable experience while you receive top-tier development services. This symbiotic relationship ensures that your project is not only completed with a high level of professionalism but also contributes to the growth of the next generation of developers.
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col>
            <Card>
              <CardBody>
                <CardTitle tag="h3">Why Choose Us?</CardTitle>
                <CardText>
                  Choosing Onyx Creative Labs means choosing innovation, expertise, and a commitment to quality. Our teams are not just solving problems; they’re creating solutions that make a difference. With the guidance of our senior mentors, you can trust that your project is in capable hands, delivered on time and with the excellence you expect.
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row className="text-center">
          <Col>
            <h2>Ready to Get Started?</h2>
            <p>
              Let us handle your marketing and or web development needs with our unique blend of student innovation and senior expertise. Contact us today to discuss how we can help you achieve your goals.
            </p>
            <Link href="/contact"><Button color="primary" size="lg">Contact Us</Button></Link>
          </Col>
        </Row>
      </Container>

        </BaseLayout>
        </>
    )
}


export default HowItWorks;