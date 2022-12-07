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
  let [courses, setCourses] = useState([])
  let [registered, setRegistered] = useState([])
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
    const fetchUsers = async() => {
      const result = await getUsers(users.result._id)
      const x = result[0].classes
      setRegistered(x)
    }
    
    const fetchCourses = async() => {
      const result = await getCourses();
      setCourses(result)
    }

    fetchUsers()
    fetchCourses()
  }, [])

  
  // array of only section_ids in the schedule
  const Schedule = () => {
    return(
    registered.map(course => { 
      schedule.push(course.section_id)
    })
    )
  }

  // 1D array of all sections of all classes
  const Catalog = () =>{
    courses.map(course => {
      course.sessions.map(session => {
        session.name= course.name
        catalog.push(session)
      })
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
      })
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
    })
    // console.log(mon)
  }

  Split()
  

  return (
    
        <>
            <div className="container" >
            <Container className="schedule">
              <h1 className="title">Schedule</h1>
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