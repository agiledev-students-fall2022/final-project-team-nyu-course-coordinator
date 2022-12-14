import React, { useState, useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import RemoveClassPopup from './RemoveClassPopup'



const Course = (props) => { 
  // props is the schedule array
  let schedule = props.schedule 
  // schedule is the array of sections
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem('profile'))) 
  // users is the user object
  const [userId, setUserId] = useState([]) 
  // userId is the user id
  const [visible, setVisible] = useState(true) 
  // visible is the state of the card


  useEffect(() => { // get the user id
    setUsers(JSON.parse(localStorage.getItem('profile'))) // get the user object
    if (users !== null){ // if the user object is not null
      setUserId(users.result._id) // set the user id
    }
  }, [])

  const isConflicting = () => { 
    // function to check for time conflicts
    schedule.map(section => {
      schedule.map(compare => {
        if (section.time === compare.time && compare!==section){
          compare.conflicting = true
          section.conflicting = true
        }
        // return (compare)
      })
      // return (section)
    })
  }


  const AlertConflict = (props) => {
    // this checks if there is a time conflict
    const conflicting= props.conflicting
    if (conflicting){
      return ("WARNING: time conflict with other classes")
    }
  }

  isConflicting() // call the function

  // const handleRemove = (section) =>{
  //   // const userid ="636ed77cfe63d7bf6b544a93"
  //   // console.log(section.id)
  //   removeFromSchedule(section.id)
  //   setVisible((prev) => !prev)
  // }

  return ( // return the card
    <>
    {schedule.map(section => { // map through the schedule array
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