import React from 'react';
import './styles.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <Container className="homeContainer">
      <Row>
        <Col>
          <h1 className="title">Welcome to NYU Course Coordinator</h1>
        </Col>
      </Row>
      <Row>
        <Col className="descriptionCol">
          <p className="description">Pick your classes, find the most optimal schedule, make sure you have all credits you need to graduate. All in one platform! With NYU Course Coordinator you can create your NYU class schedule and see what are the best classes to take.</p>
          <Button className="button" href="/courses">Get Started</Button>
        </Col>
      </Row>
    </Container>

  );
}