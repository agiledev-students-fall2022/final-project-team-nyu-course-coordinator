import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
<<<<<<< Updated upstream

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
=======
import { useState, useEffect } from 'react'
import { getUsers, getCourses } from '../../../actions/courses'
import { useSelector } from 'react-redux';
import { removeFromSchedule } from '../../../api';


const Course = (props) => {
  const [visible, setVisible] = useState(true)
  const schedule = props.schedule

  const handleRemove = (section) =>{
    // const userid ="636ed77cfe63d7bf6b544a93"
    // console.log(section.id)
    console.log("trigggg")
    console.log(section.id)
    removeFromSchedule(section.id)
    setVisible((prev) => !prev)
  }

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
                {/* <Button>Remove from schedule</Button> */}
                {visible && (<Button variant="primary" onClick= {() => handleRemove(section)}>Remove from Schedule</Button>)}
              </Card.Text>
            </Card.Body>
          </Card>
        </>
      )
    })};
    </>
>>>>>>> Stashed changes
  )
}

export default Course