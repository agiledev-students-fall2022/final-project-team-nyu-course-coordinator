import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Schedule from '../Schedule';
import { removeFromSchedule } from '../../../api';
import RemoveClassPopup from '../../RemoveClassPopup'



const Course = (props) => {
  const schedule = props.schedule

  const handleRemove= (section) =>{
    // const userid ="636ed77cfe63d7bf6b544a93"
    // console.log(section.id)
    removeFromSchedule(section.id)
    Schedule()
    RemoveClassPopup()
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
                <Button variant="primary" onClick= {() => handleRemove(section)}>Remove from Schedule</Button>)
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