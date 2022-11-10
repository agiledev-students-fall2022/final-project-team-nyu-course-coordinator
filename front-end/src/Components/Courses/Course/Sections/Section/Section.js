import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import { useDispatch } from 'react-redux';

const Section = ({ section, setCurrentId }) => {
  // const dispatch = useDispatch();
  return (
    <Card>
      <Card.Body>
        <Card.Title>{section.title}</Card.Title>
        <Card.Text>
          Section Description
        </Card.Text>
        <Button variant="primary">Add to Schedule</Button>
      </Card.Body>
    </Card>
  );
}

export default Section;