import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from 'react-bootstrap';
import Course from './Course/Course';
import './styles.css';
import axios from 'axios'
import { useState, useEffect } from 'react'
import User from './User'
import { getUsers } from '../../actions/courses';

const Schedule = () => {
const[users, setUsers] = useState([])
// const[error, setError] = useState('')

  // const fetchUsers = () => {
  //   axios
  //     .get(`${process.env.REACT_APP_SERVER_HOSTNAME}users`)
  //     .then(response => {
  //       // axios bundles up all response data in response.data property
  //       const users = response.data.users
  //       console.log("hello world")
  //       console.log(users)
  //       setUsers(users)
  //     })
  //     .catch(err => {
  //       setError(err)
  //     })
  // }

 useEffect(() => {
    const fetchData = async() => {
      const result = await getUsers();
      setUsers(result)
    }
    fetchData()
 }, [])

  //   // set a timer to load data from server every n seconds
  //   const intervalHandle = setInterval(() => {
  //     fetchUsers()
  //   }, 5000)

  //   // return a function that will be called when this component unloads
  //   return e => {
  //     // clear the timer, so we don't still load messages when this component is not loaded anymore
  //     clearInterval(intervalHandle)
  //   }
  // }, [])
  
  
  // return (
  //   <div className="container" >
  //   <Container className="container">
  //     <h1 className="title">Schedule</h1>
  //     {error && <p className="User-error">{error}</p>}
  //     {users.map(user => (
  //       <User key={user._id} user={user} />
  //     ))}
  //     <Course />
  //     <h2>Monday</h2>
  //     <Course />
  //     <h2>Tuesday</h2>
  //     <Course />
  //     <h2>Wednesday</h2>
  //     <Course />
  //     <h2>Thursday</h2>
  //     <Course />
  //     <h2>Friday</h2>
  //     <Course />
  //   </Container>
  //   </div>
  // );
}

export default Schedule;

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function Schedule() {
//   const [users, setUsers] = useState([]);
//   const url = 'http://localhost:3001/users'

//   useEffect(() => {
//     getUsers();
//   }, []);

//   const getUsers = () => {
//     axios.get(`${url}past`)
//     .then((response) => {
//       const allUsers = response.data.name
//       getUsers(allUsers)
//     })
//     .catch(error => console.error(`Error: ${error}`))
//   }
  
//   return (
//     <div>
//       Users
//       {users.map((item, i) => {
//         return (
//           <div key={i}>
//             <p>{item?.name}</p>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default Schedule;