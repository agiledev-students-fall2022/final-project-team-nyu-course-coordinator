import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import { useDispatch } from 'react-redux';

const Section = () => {
  // const dispatch = useDispatch();
  return (
    <Card>
      <Card.Body>
        <Card.Title>Session Number</Card.Title>
        <Card.Text className="sectionInfo">
          <p>Course location:</p>
          <p>Class #:</p>
          <p>Credits:</p>
          <p>Course status:</p>
          <p>Instruction mode:</p>
          <p>Component:</p>
          <p>Class time:</p>
          <p>Class instructor:</p>
          <p>Class time:</p>
        </Card.Text>
        <Button variant="primary">Add to Schedule</Button>
      </Card.Body>
    </Card>
  );
}

export default Section;