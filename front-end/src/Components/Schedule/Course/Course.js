import React, { useState, useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import RemoveClassPopup from './RemoveClassPopup'



const Course = (props) => {
  let schedule = props.schedule
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem('profile')))
  const [userId, setUserId] = useState([])
  const [visible, setVisible] = useState(true)


  useEffect(() => {
    setUsers(JSON.parse(localStorage.getItem('profile')))
    setUserId(users.result._id)
  }, [])

  const isConflicting = () => {
    schedule.map(section => {
      schedule.map(compare => {
        if (section.time === compare.time && compare!==section){
          compare.conflicting = true
          section.conflicting = true
        }
      })
    })
  }


  const AlertConflict = (props) => {
    const conflicting= props.conflicting
    if (conflicting){
      return ("WARNING: time conflict with other classes")
    }
  }

  isConflicting()

  // const handleRemove = (section) =>{
  //   // const userid ="636ed77cfe63d7bf6b544a93"
  //   // console.log(section.id)
  //   removeFromSchedule(section.id)
  //   setVisible((prev) => !prev)
  // }

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
              {/* {visible && <Button variant="primary" onClick= {() => handleRemove(section)}>Remove from Schedule</Button>} */}
              <RemoveClassPopup section = {section} userId = {userId} setVisible = {setVisible}></RemoveClassPopup>
            </Card.Body>
          </Card>}
        </>
      )
    })}
    </>
  )

}

export default Course