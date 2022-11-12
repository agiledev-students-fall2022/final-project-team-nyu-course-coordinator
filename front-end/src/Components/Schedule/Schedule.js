import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from 'react-bootstrap';
import Course from './Course/Course';
import './styles.css';

const Schedule = () => {
  
  return (
    <div className="container" >
    <Container className="container">
      <h1 className="title">Schedule</h1>
      <h2>Monday</h2>
      <Course />
      <h2>Tuesday</h2>
      <Course />
      <h2>Wednesday</h2>
      <Course />
      <h2>Thursday</h2>
      <Course />
      <h2>Friday</h2>
      <Course />
    </Container>
    </div>
  );
}

export default Schedule;