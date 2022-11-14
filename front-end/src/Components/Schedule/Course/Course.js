import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react'
import { getUsers, getCourses } from '../../../actions/courses';

const Course = () => {
  let [users, setUsers] = useState([])
  let [courses, setCourses] = useState([])

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
      setCourses(result)
    }
    fetchData()
  },[])

  // const real_users = JSON.parse(users)
  // const real_courses = JSON.parse(courses)

  const user_section_id = "636ed0839d69c324c439fc09";
  // const course_time = ""
  // // const course_day = []
  // const course_name = ""
  // const course_section = ""

  // for(let i = 0; i < real_courses.length; i++) {
  //   for (let j = 0; j < real_courses[i].sessions.length; j++) {
  //     if (real_courses[i].sessions[j]._id.toString() === user_section_id) {
  //       course_time = real_courses[i].sessions[j].time;
  //       // course_day = 
  //       course_name = real_courses[i].name
  //       course_section = real_courses[i].sessions[j].section
  //     }
  //   }
  // }

  return (
    <Card className="card">
      <Card.Body>
        <Card.Title>{user_section_id}</Card.Title>
          {/* <Card.Text>
            <p>{course_time}</p>
            <p>{course_section}</p>
            <Button>Remove from schedule</Button>
            </Card.Text> */}
      </Card.Body>
    </Card>
  )
}

export default Course