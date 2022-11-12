import React from 'react';
import { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card';
// import { useSelector } from 'react-redux';
// import Course from './Course/Course';
import Container from 'react-bootstrap/Container';
import './styles.css';
// import { getCourses } from '.../actions/courses.js';
import axios from 'axios'
import courseData from './courseData.json'
import Button from 'react-bootstrap/Button';


const Courses = () => {
  // const [courses, setCourses] = useState([])

  // useEffect(() => {
  //   fetch("http://localhost:3001/")
  //     .then((res) => res.json())
  //     .then((jsonRes) => setCourses(jsonRes));
  // }, [])

  // useEffect(() => {
  //   console.log(courses)
  // }, [courses])

  const [courses, setCourses] = useState([])
  const [error, setError] = useState('')
  // const [feedback, setFeedback] = useState('')

  /**
   * A nested function that fetches messages from the back-end server.
   */

  const fetchCourses = () => {
    // setMessages([])
    // setLoaded(false)
    axios
      .get(`${process.env.REACT_APP_SERVER_HOSTNAME}/courses`)
      .then(response => {
        // axios bundles up all response data in response.data property
        const courses = response.data.courses
        setCourses(courses)
      })
      .catch(err => {
        setError(err)
      })
  }

  useEffect(() => {
    // fetch messages this once
    fetchCourses()

    // set a timer to load data from server every n seconds
    const intervalHandle = setInterval(() => {
      fetchCourses()
    }, 5000)

    // return a function that will be called when this component unloads
    return e => {
      // clear the timer, so we don't still load messages when this component is not loaded anymore
      clearInterval(intervalHandle)
    }
  }, []) // putting a blank array as second argument will cause this function to run only once when component first loads

  return (
    <div>
      {courses.map(course => (
        <div key={course._id} >
          {course.name}
        </div>
      ))}
    </div>
  )

  /*

  return (
    <Container className="coursesContainer">
      <h1 className='title'>All Courses</h1>
      {
        courseData && courseData.map(course => {
          return(
            <Card className='courseCard' key={course.name}>
              <Card.Body >
                <Card.Title>{course.name}</Card.Title>
                {course.sessions && course.sessions.map(session => {
                  return(
                    <Card key = {session.section}>
                      <Card.Body>
                        <Card.Title>{session.section} </Card.Title>
                          <Card.Text className="sectionInfo">
                            <p>Professor: {session.prof}</p>
                            <p>Days: </p>
                            <p>Timings: {session.time}</p>
                            <p>Location: {session.loc} </p>
                          </Card.Text>
                        <Button variant="primary">Add to Schedule</Button>
                      </Card.Body>
                    </Card>
                  )
                })
              }
              </Card.Body>
            </Card>
          )
        })
      }
    </Container>
  );

  */
}

export default Courses;