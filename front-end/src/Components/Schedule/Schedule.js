import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from 'react-bootstrap';
import Course from './Course/Course';
import './styles.css';

const Schedule = () => {

  return (
    <div className="container" >
    <Container className="container">
      <h1 className="title">Schedule</h1>
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