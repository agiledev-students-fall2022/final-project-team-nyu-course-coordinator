import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import  { getUsers }  from '../../../actions/courses.js'; 
import AddClassPopup from './AddClassPopup'

const Section = (session) => { 

  const [users, setUsers] = useState(JSON.parse(localStorage.getItem('profile')))
  const [userId, setUserId] = useState([])
  // const [visible, setVisible] = useState(true)
  // const schedule =[]

  const section = session.info
  const num = session.info.section
  const prof= session.info.prof
  const day = session.info.day
  const time = session.info.time
  const loc = session.info.loc


  useEffect(() => {
      setUsers(JSON.parse(localStorage.getItem('profile')))
      setUserId(users.result._id)
  }, [])

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
        {/* {visible && (<Button variant="primary" onClick= {() => handleAdd(section)}>Add to Schedule</Button>)} */}
        {AddClassPopup(section, userId)}
      </Card.Body>
    </Card>
    </>
  )
}
export default Section;