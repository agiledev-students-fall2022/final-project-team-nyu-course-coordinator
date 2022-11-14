import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react'
import { getUsers, getCourses } from '../../../actions/courses'
import { useSelector } from 'react-redux';


const Course = (props) => {
  
  const schedule = props.schedule

  return (
    <>
    {schedule.map(section => {
      return(
        <>
          <Card className="card">
            <Card.Body>
              <Card.Title>{section.name}</Card.Title>
              <Card.Text>
                <p>Section {section.section}</p>
                <p>{section.prof}</p>
                <p>{section.time}</p>
                <p>{section.loc}</p>
                <Button>Remove from schedule</Button>
              </Card.Text>
            </Card.Body>
          </Card>
        </>
      )
    })};
    </>
  )

}

export default Course