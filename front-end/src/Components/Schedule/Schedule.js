import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from 'react-bootstrap';
import Course from './Course/Course';
import './styles.css';
// import axios from 'axios'
import { useState, useEffect } from 'react'
// import User from './User'
import { getUsers } from '../../actions/courses';

const Schedule = () => {
  let [users, setUsers] = useState([])

  useEffect(() => {
    const fetchData = async() => {
      const result = await getUsers();
      setUsers(result)
    }
    fetchData()
  }, [])
  
  return (
    <div className="container" >
    <Container className="container">
      <h1 className="title">Schedule</h1>
      <h2>Monday</h2>
      <Course />
      <h2>Tuesday</h2>
      <Course />
      <h2>Wednesday</h2>
      <Course />
      <h2>Thursday</h2>
      <Course />
      <h2>Friday</h2>
      <Course />
    </Container>
    </div>
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
