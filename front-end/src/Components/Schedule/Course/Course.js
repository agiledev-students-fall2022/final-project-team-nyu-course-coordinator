import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react'
import { getUsers, getCourses } from '../../../actions/courses'

const Course = (schedule) => {
  
  // console.log(schedule)

  return (
    <>
    {schedule.map(section => {
      return(
        <>
          <Card className="card">
            <Card.Body>
              <Card.Title>{section.name}</Card.Title>
              <Card.Text>
                <p>Course time</p>
                <Button>Remove from schedule</Button>
              </Card.Text>
            </Card.Body>
          </Card>
        </>
      )
    })}
    </>
          
         
    
  )
}

export default Course