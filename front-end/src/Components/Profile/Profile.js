import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import { Container } from 'react-bootstrap';
import { useState, useEffect } from 'react'
import './styles.css';
import { getUsers } from '../../actions/courses';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default function Profile() {
  // let [user, setUsers] = useState([])
  // useEffect(() => {
  //   const fetchUsers = async() => {
  //     const result = await getUsers();
  //     console.log(result)
  //     setUsers(result[0])
  //   }
  //   fetchUsers()
  // }, [])
  // return ( // display user info  
  //   <div className="profile">
  //     <h1>Profile</h1>
  //     <ListGroup>
  //       <ListGroup.Item>Name: {user.name}</ListGroup.Item>
  //       <ListGroup.Item>Email: {user.email}</ListGroup.Item>
  //       {/* <ListGroup.Item>Classes: {user.classes.map(section => {
  //         return <Badge variant="secondary">{section.section_id}</Badge>
  //       })}</ListGroup.Item> */}
  //     </ListGroup>
  //   </div>
  // );


  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  useEffect(() => {
    // const token = user?.token;
    // if (token) {
    //   const decodedToken = decode(token);
    //   if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    // }
    setUser(JSON.parse(localStorage.getItem('profile')));
  }, []);
    return ( // display user info  
    // <div className="profile">
    //   <h1>Profile</h1>
    //   <ListGroup>
    //     <ListGroup.Item>Name: {user?.result.name}</ListGroup.Item>
    //     <ListGroup.Item>Email: {user?.result.email}</ListGroup.Item>
    //     {/* <ListGroup.Item>Classes: {user.classes.map(section => {
    //       return <Badge variant="secondary">{section.section_id}</Badge>
    //     })}</ListGroup.Item> */}
    //   </ListGroup>
    // </div>

    <Container className="profileContainer">
    <h1 className="title">Your Profile</h1>
    <ListGroup className="listGroup">
      <ListGroup.Item>{user?.result.name}
      </ListGroup.Item>
      <ListGroup.Item>{user?.result.email}
      </ListGroup.Item>

    </ListGroup>
  </Container>
  );
}