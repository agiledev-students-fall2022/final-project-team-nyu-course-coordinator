import React, {useState, useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';
import { getCourses } from '../../../actions/courses';
import Section from './Section';
import './styles.css';


const Course = () => {
  let [cart, setCart] = useState([])
  // const data= getCourses()
  // console.log("cart", data)

  useEffect(() => {
    const fetchData = async () => {
      const result = await getCourses();
      setCart(result);
    };
    fetchData();
  }, []);
  
  // console.log("cart", cart)
  
  
  // // const { cart } = useSelector((state) => state.course);
  // const Requirement=(props) => {
  //   const isRequired= props.isRequired
  //   if (isRequired){
  //     return ("Required for your major")
  //   }
  //   else {
  //     return ("Not required for your major")
  //   }
  // }


  // return (
  //   <div>
  //     {cart.map((course, index)=>{
  //       <>
  //       <Card className='courseCard'>
  //         <Card.Body>
  //           <Card.Title>{course.name}</Card.Title>
  //           <Card.Text className="sectionInfo">
  //            <p> <Requirement isRequired={course.isRequired}/></p>
  //           </Card.Text>
  //           {course.sessions.map((session, i)=>{
  //             <Section info={session}/>
  //           })}
  //         </Card.Body>
  //       </Card>
  //       </>
  //     })}
  //   </div>
    

  // )


}

export default Course;

