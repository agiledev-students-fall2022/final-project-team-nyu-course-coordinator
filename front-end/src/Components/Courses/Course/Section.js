import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const Section = (session) => {
  const num = session.info.section
  const prof= session.info.prof
  const day = session.info.day
  const time = session.info.time
  const loc = session.info.loc


  // unit tests
  assert.typeOf(Section, 'function');
  assert.typeOf(num, 'number');
  assert.typeOf(prof, 'string');
  assert.typeOf(day, 'object');
  assert.typeOf(time, 'string');
  assert.typeOf(loc, 'string');

  return (
    <>
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
    </>
  )
}
export default Section;