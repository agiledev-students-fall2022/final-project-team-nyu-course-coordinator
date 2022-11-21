import React, {useState, useEffect} from 'react';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import { addToSchedule } from '../../../api';
import  { getUsers }  from '../../../actions/courses.js'; 
import AddClassPopup from '../../AddClassPopup'

const Section = (session) => { 
  const [users, setUsers] = useState([])

  // const [visible, setVisible] = useState(true)
  // const schedule =[]
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

  // const initializeAdd = () => {
  //   Schedule()
  //   // console.log("sche", schedule)
  //   schedule.map(s => {
  //     if (s===section.id){
  //       console.log("Comparing with: ",section.id)
  //       setVisible(false)
  //     } else {
  //       setVisible(true)
  //     }
  //   })
  // }



  return (
    <>
    {/* {initializeAdd()} */}
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