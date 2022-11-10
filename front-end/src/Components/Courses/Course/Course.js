import React from 'react';
import Card from 'react-bootstrap/Card';
// import { useSelector } from 'react-redux';
import Section from './Section';
import './styles.css';


const Course = () => {
  // const { courses } = useSelector((state) => state.courses);
  return (
    <Card className='courseCard'>
      <Card.Body >
        <Card.Title>Course Name</Card.Title>
        <Card.Text className="sectionInfo">
          <p>Course description:</p>
          <p>Course requirements:</p>
          <p>School:</p>
        </Card.Text>
        <Section />
      </Card.Body>
    </Card>
  );
}

export default Course;