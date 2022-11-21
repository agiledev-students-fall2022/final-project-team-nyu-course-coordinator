import React, {useEffect, useState} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Schedule from '../Schedule';
import { removeFromSchedule } from '../../../api';
import RemoveClassPopup from '../../RemoveClassPopup'
import { changeSection } from '../../../actions/courses';



const Course = (props) => {
  let schedule = props.schedule
  const [visible, setVisible] = useState(true)


  const handleRemove = (section) =>{
    // const userid ="636ed77cfe63d7bf6b544a93"
    // console.log(section.id)
    removeFromSchedule(section.id)
    setVisible((prev) => !prev)
    RemoveClassPopup()
  }


  const isConflicting = () => {
    let prev = {}
    schedule.map(section => {
      // section.conflicting = false
      if (prev.time === section.time){
        prev.conflicting = true
        section.conflicting = true
      }
      prev=section
    })
  }


  const AlertConflict = (props) => {
    const conflicting= props.conflicting
    if (conflicting){
      return ("WARNING: time conflict with other classes")
    }
  }

  isConflicting()

  return (
    <>
    {schedule.map(section => {
      return(
        <>
        {visible &&   <Card className="card">
            <Card.Body>
              <Card.Title>{section.name}</Card.Title>
              <Card.Text>
              {visible && <p>Section {section.section}</p>}
              {visible && <p>{section.prof}</p> }
              {visible &&  <p>{section.time}</p> }
              {visible &&  <p>{section.loc}</p>}
              {visible &&  <p id="warning"> <AlertConflict conflicting={section.conflicting}/> </p>}
              </Card.Text>
              {visible && <Button variant="primary" onClick= {() => handleRemove(section)}>Remove from Schedule</Button>}
            </Card.Body>
          </Card> }
        </>
      )
    })}
    </>
  )

}

export default Course