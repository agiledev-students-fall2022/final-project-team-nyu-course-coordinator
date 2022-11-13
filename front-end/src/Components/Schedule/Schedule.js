import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from 'react-bootstrap';
import Course from './Course/Course';
import './styles.css';
import { useState, useEffect } from 'react'
import { getUsers, getCourses } from '../../actions/courses';

const Schedule = () => {
  let [users, setUsers] = useState([])
  let [cart, setCart] = useState([])

  useEffect(() => {
    const fetchData = async() => {
      const result = await getUsers();
      setUsers(result)
    }
    fetchData()
  }, [])
  
  useEffect(()=>{
    const fetchData= async()=>{
      const result = await getCourses()
      setCart(result)
    }
    fetchData()
  },[])

  const getUserClass = () => {
    // loop through courses
    console.log("random")
    console.log("636ed0839d69c324c439fc08")
    console.log(cart[0]._id);
    cart.map((course, index) => {
      return(
        if ("636ed0839d69c324c439fc08" === course._id) {
          console.log("It worked")
        }
        else {
          console.log("it didn't work")
        }
      )
    })
  }
  getUserClass();

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