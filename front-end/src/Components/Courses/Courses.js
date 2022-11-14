import React from 'react';
// import { useSelector } from 'react-redux';
import Course from './Course/Course';
import Container from 'react-bootstrap/Container';
import './styles.css';
const chai = require('chai');
const expect = chai.expect;


const Courses = () => {
  // const { courses } = useSelector((state) => state.courses);
  return (
    <Container className="coursesContainer">
      <h1 className='title'>All Courses</h1>
      <Course />
    </Container>
  );
}

export default Courses;