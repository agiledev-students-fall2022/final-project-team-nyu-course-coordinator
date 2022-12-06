import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { Container } from 'react-bootstrap';
import { useState, useEffect } from 'react'
import './styles.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default function Profile() {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  useEffect(() => {
    
    setUser(JSON.parse(localStorage.getItem('profile')));
  }, []);
    return ( 
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