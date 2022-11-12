import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';

const Section = (session) => {
  const dispatch = useDispatch();
  const num = session.section
  const prof= session.prof
  const day = session.day
  const time = session.time
  const loc = session.loc
  return (
    <Card>
      <Card.Body>
        <Card.Title>Section {num}</Card.Title>
        <Card.Text className="sectionInfo">
          <p>Professor: {prof}</p>
          <p>Day: {day}</p>
          <p>Time: {time}</p>
          <p>Location: {loc}</p>
        </Card.Text>
        <Button variant="primary">Add to Schedule</Button>
      </Card.Body>
    </Card>
  );
}

export default Section;