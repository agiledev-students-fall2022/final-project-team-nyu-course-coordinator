import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from 'react-bootstrap';
import Course from './Course/Course';
import './styles.css';
// import axios from 'axios'
import { useState, useEffect } from 'react'
// import User from './User'
import { getUsers } from '../../actions/courses';
import { getCourses } from '../../actions/courses';

const Schedule = () => {
  let [users, setUsers] = useState(JSON.parse(localStorage.getItem('profile'))); 
  // get the user object
  let [courses, setCourses] = useState([]) 
  // get the courses
  let [registered, setRegistered] = useState([]) 
  // get the registered courses
  let schedule =[]
  let catalog = []
  let display = []
  let monWed = []
  let tueThu = []
  // let mon = []
  // let tue = []
  // let wed = []
  // let thu = []
  let fri = []
// getUsers()


  useEffect(() => {
    
    setUsers(JSON.parse(localStorage.getItem('profile')))
    if (users !== null){ 
      // this is supposed to check if the user is signed in
        const fetchUsers = async() => { 
          // fetch the user
        const result = await getUsers(users.result._id) 
        // get the user
        const x = result[0].classes 
        // get the classes
        setRegistered(x) 
        // set the registered classes
        }
        fetchUsers() 
        // fetch the user
    }
    
    
    const fetchCourses = async() => {   
      // fetch the courses
      const result = await getCourses();  
      // get the courses
      setCourses(result) 
      // set the courses
    }
    // sleep for 5 secs
    // setTimeout(() => {
    //   console.log("sleeping")
    // }, 5000);

    fetchCourses()
  }, [])

  const NotSignedIn = (props) => {
    if (props.user === null){
      return ("Sign in to build your schedule!")
    }
  }
  
  // array of only section_ids in the schedule
  const Schedule = () => {
    return(
    registered.map(course => { 
      schedule.push(course.section_id)
      // return schedule
    })
    )
  }

  // 1D array of all sections of all classes
  const Catalog = () =>{
    courses.map(course => {
      course.sessions.map(session => {
        session.name= course.name
        catalog.push(session)
        // return catalog
      })
    // return catalog
    })
  }


  // display = array of sections that shoudld be displayed
  const Compare = () => {
    Schedule()
    Catalog()
    catalog.filter(section => {
      schedule.map(sectionId => {
        if(sectionId === section.id){
          display.push(section)
        }
        return display
      })
      return display
    })
  }

  // split display by days in the week
  // mon = an array of sections happening on mondays
  const Split = () =>{
    Compare()
    display.map(section => {
      // if (section.day.includes("Mon") && !mon.includes(section)){
      //   mon.push(section)
      // }
      if (section.day.includes("Mon") && section.day.includes("Wed") && !monWed.includes(section)){
        monWed.push(section)
      }
      if (section.day.includes("Tue") && section.day.includes("Thu") && !tueThu.includes(section)){
        tueThu.push(section)
      }
      // if (section.day.includes("Wed") && !wed.includes(section)){
      //   wed.push(section)
      // }
      // if (section.day.includes("Thu") && !thu.includes(section)){
      //   thu.push(section)
      // }
      if (section.day.includes("Fri") && !fri.includes(section)){
        fri.push(section)
      }
      return section
    })
    // console.log(mon)
  }

  Split()

  return (
    
        <>
        

            <div className="container" >
            <Container className="schedule">
              <h1 className="title">Schedule</h1>
              <p id="warning"><NotSignedIn user={users}/></p>
              <h2>Monday</h2>
              <Course schedule={monWed}/>
              <h2>Tuesday</h2>
              <Course schedule={tueThu}/>
              <h2>Wednesday</h2>
              <Course schedule={monWed}/>
              <h2>Thursday</h2>
              <Course schedule={tueThu}/>
              <h2>Friday</h2>
              <Course schedule={fri}/>
            </Container>
            </div>
        </>
    
  );
}

    // <>{users.map((user, i) => {
    //   return(
    //     <>
    //     {user.classes.map((class, m) => {
    //       return(
            
    //           {class.section_num}
    //       );
    //     })}
    //     </>
    //   );
    // })};
    // </>

// console.log(users[0].classes[0].section_num)
export default Schedule;