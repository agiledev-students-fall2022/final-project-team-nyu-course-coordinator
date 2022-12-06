import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import  { getUsers }  from '../../../actions/courses.js'; 
import AddClassPopup from './AddClassPopup'

const Section = (session) => { 
  const [setUsers] = useState([])

  const section = session.info
  const num = session.info.section
  const prof= session.info.prof
  const day = session.info.day
  const time = session.info.time
  const loc = session.info.loc


  useEffect(() => {
    const fetchUsers = async() => {
      const result = await getUsers();
      setUsers(result)
    }
    fetchUsers()
  }, [setUsers])

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
        {AddClassPopup(section)}
      </Card.Body>
    </Card>
    </>
  )
}
export default Section;