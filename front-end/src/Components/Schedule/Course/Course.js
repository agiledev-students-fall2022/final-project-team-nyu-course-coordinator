import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Schedule from '../Schedule';
import { removeFromSchedule } from '../../../api';
import RemoveClassPopup from '../../RemoveClassPopup'



const Course = (props) => {
  const schedule = props.schedule
  const [visible, setVisible] = useState(true)
  const handleRemove = (section) =>{
    // const userid ="636ed77cfe63d7bf6b544a93"
    // console.log(section.id)
    removeFromSchedule(section.id)
    setVisible((prev) => !prev)
    RemoveClassPopup()
  }



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