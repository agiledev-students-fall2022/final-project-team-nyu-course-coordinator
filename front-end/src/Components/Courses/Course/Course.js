import React, {useState, useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';
import { getCourses } from '../../../actions/courses';
import Section from './Section';
import './styles.css';
import axios from 'axios'
import { assert } from 'chai';


const Course = () => {
  let [cart, setCart] = useState([])
  
  useEffect(()=>{
    const fetchData= async()=>{
      const result = await getCourses()
      setCart(result)
    }
    fetchData()
  },[])

  console.log(cart)
  

  
  
  // const { cart } = useSelector((state) => state.course);
  const Requirement=(props) => {
    const isRequired= props.isRequired
    if (isRequired){
      return ("Required for your major")
    }
    else {
      return ("Not required for your major")
    }
  }

  // unit tests
assert.typeOf(Course, 'function');
assert.typeOf(Requirement, 'function');

  return (
    <>
      {cart.map((course, index)=>{
        return(
          <>
          <Card className='courseCard'>
            <Card.Body>
              <Card.Title>{course.name}</Card.Title>
              <Card.Text className="sectionInfo">
              <p> <Requirement isRequired={course.isRequired}/></p>
              </Card.Text>
              {course.sessions.map((session, i)=>{
                return(
                  <Section info={session}/>
                )
              })}
            </Card.Body>
          </Card>
          </>
        )
        
        
      })}
    </>
    

  )



}

export default Course;

