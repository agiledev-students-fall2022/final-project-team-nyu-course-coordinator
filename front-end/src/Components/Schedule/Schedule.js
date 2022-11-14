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
  let [users, setUsers] = useState([])
  let [courses, setCourses] = useState([])
  let schedule =[]
  let catalog = []
  let display = []
  let mon = []
  let tue = []
  let wed = []
  let thu = []
  let fri = []
// getUsers()

  useEffect(() => {
    const fetchUsers = async() => {
      const result = await getUsers();
      console.log(result)
      setUsers(result)
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
    users.map(user => { 
      user.classes.map(section => {
        schedule.push(section.section_id)
      })
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

  // display= array of sections that shoudld be displayed
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
  const Split =() =>{
    Compare()
    display.map(section => {
      if (section.day.includes("Mon") && !mon.includes(section)){
        mon.push(section)
      }
      if (section.day.includes("Tue") && !tue.includes(section)){
        tue.push(section)
      }
      if (section.day.includes("Wed") && !wed.includes(section)){
        wed.push(section)
      }
      if (section.day.includes("Thu") && !thu.includes(section)){
        thu.push(section)
      }
      if (section.day.includes("Fri") && !fri.includes(section)){
        fri.push(section)
      }
    })
    console.log(mon)
  }

  Split()
  

  // if any of the <Course> is not commented, getUsers() and getCourses() won't await
  return (
        <>
            <div className="container" >
            <Container className="container">
              <h1 className="title">Schedule</h1>
              <h2>Monday</h2>
              <Course schedule={mon}/>
              <h2>Tuesday</h2>
              <Course schedule={tue}/>
              <h2>Wednesday</h2>
              <Course schedule={wed}/>
              <h2>Thursday</h2>
              <Course schedule={thu}/>
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