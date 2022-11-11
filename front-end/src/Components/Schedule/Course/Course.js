import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Course = () => {
  return (
    <Card className="card">
        <Card.Body>
          <Card.Title>Course name</Card.Title>
          <Card.Text>
            <p>Course time</p>
            <Button>Remove from schedule</Button>
          </Card.Text>
        </Card.Body>
      </Card>
  )
}

export default Course