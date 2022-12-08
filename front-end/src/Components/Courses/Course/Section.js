import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
// import  { getUsers }  from '../../../actions/courses.js'; 
import AddClassPopup from './AddClassPopup'

const Section = (session) => { 

  const [users, setUsers] = useState(JSON.parse(localStorage.getItem('profile')))
  const [userId, setUserId] = useState([])
  const [registered, setRegistered] = useState([])
  const [visible, setVisible] = useState(true)
  // const schedule =[]

  const section = session.info
  const id = section.id
  const num = session.info.section
  const prof= session.info.prof
  const day = session.info.day
  const time = session.info.time
  const loc = session.info.loc


  useEffect(() => {
      setUsers(JSON.parse(localStorage.getItem('profile')))
      if (users !== null){
          setUserId(users.result._id)

          const fetchUsers = async() => {
              const result = await getUsers(users.result._id)
              const x = result[0].classes
              setRegistered(x)
          }
    
          fetchUsers()
          console.log("REGISTER",registered)
      }
      
      
  }, [])
 
  
  // const Schedule = () => {
  //   return(
  //   users.map(user => { 
  //     user.classes.map(section => {
  //       schedule.push(section.section_id)
  //     })
  //   })
  //   )
  // }

  const initializeAdd = () => {
    
    registered.map(s => {
      if (s.section_id === id){
        console.log("here it is")
        console.log("Comparing with: ",section.id)
        // setVisible(false)
      } else {
        // setVisible(true)
      }
    })
  }

  // initializeAdd()


  return (
    <>
    {/* {initializeAdd()} */}
    {visible &&  <Card>
      <Card.Body>
        <Card.Title>Section {num}</Card.Title>
        <Card.Text className="sectionInfo">
          {visible &&  <p>Professor: {prof}</p>}
          {visible &&  <p>Day: {day}</p>}
          {visible &&  <p>Time: {time}</p>}
          {visible &&  <p>Location: {loc}</p>}
           
        </Card.Text>
        {/* {visible && (<Button variant="primary" onClick= {() => handleAdd(section)}>Add to Schedule</Button>)} */}
        <AddClassPopup section = {id} userId = {userId} setVisible = {setVisible}></AddClassPopup>
      </Card.Body>
    </Card>}
    </>
  )
}
export default Section;