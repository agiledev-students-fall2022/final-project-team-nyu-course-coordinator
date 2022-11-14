import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addToSchedule } from '../../../api';

const Section = (session) => {
  const [visible, setVisible] = useState(true)
  const section = session.info
  const num = session.info.section
  const prof= session.info.prof
  const day = session.info.day
  const time = session.info.time
  const loc = session.info.loc

  const handleAdd= (section) =>{
    // const userid ="636ed77cfe63d7bf6b544a93"
    console.log(section.id)
    addToSchedule(section.id)
    setVisible((prev) => !prev)

  }

  useEffect(()=>{
    
  },[])

  

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
        {visible && (<Button variant="primary" onClick= {() => handleAdd(section)}>Add to Schedule</Button>)}
      </Card.Body>
    </Card>
    </>
  )
}
export default Section;