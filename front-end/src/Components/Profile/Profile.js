import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import { Container } from 'react-bootstrap';
import './styles.css';

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default function Profile() {
  
  return (
    <Container className="profileContainer">
      <h1 className="title">Your Profile</h1>
      <ListGroup className="listGroup">
        <ListGroup.Item>John Doe
        <Badge className="editBadge" pill>
          Edit
        </Badge>
        </ListGroup.Item>
        <ListGroup.Item>Email
          <Badge className="editBadge" pill>
            Edit
          </Badge>
        </ListGroup.Item>
        <ListGroup.Item>Password
          <Badge className="editBadge" pill>
              Edit
          </Badge>
        </ListGroup.Item>
        <ListGroup.Item>Computer Science at CAS
          <Badge className="editBadge" pill>
              Edit
          </Badge>
        </ListGroup.Item>
        <ListGroup.Item>2022
          <Badge className="editBadge" pill>
            Edit
          </Badge>
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
}