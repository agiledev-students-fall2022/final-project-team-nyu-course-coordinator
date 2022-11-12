import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from 'react-bootstrap';
// import Course from './Course/Course';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import './styles.css';

// const [data, setData] = useState([])

// const initialData = async() => {
  
//   axios.get(`${process.env.REACT_APP_SERVER_HOSTNAME}/`)
//       .then(res => {
//           setData(res.data)
//       })
//       .catch(err => {
//         console.log(`ERROR: ${err}`)
//       })
//   }


// useEffect(() => {
//   initialData()
// }, [])

const Schedule = () => {

  return (
    <div className="container" >
    <Container className="container">
      <h1 className="title">Schedule</h1>
      <h2>Monday</h2>
      <Card className="card">
        <Card.Body>
          <Card.Title>Course Name</Card.Title>
          <Card.Text>
            <p>Course time</p>
            <p>Location</p>
            <Button>Remove from schedule</Button>
          </Card.Text>
        </Card.Body>
      </Card>
      <h2>Tuesday</h2>
      <Card className="card">
        <Card.Body>
          <Card.Title>Course Name</Card.Title>
          <Card.Text>
            <p>Course time</p>
            <p>Location</p>
            <Button>Remove from schedule</Button>
          </Card.Text>
        </Card.Body>
      </Card>
      <h2>Wednesday</h2>
      <Card className="card">
        <Card.Body>
          <Card.Title>Course Name</Card.Title>
          <Card.Text>
            <p>Course time</p>
            <p>Location</p>
            <Button>Remove from schedule</Button>
          </Card.Text>
        </Card.Body>
      </Card>
      <h2>Thursday</h2>
      <Card className="card">
        <Card.Body>
          <Card.Title>Course Name</Card.Title>
          <Card.Text>
            <p>Course time</p>
            <p>Location</p>
            <Button>Remove from schedule</Button>
          </Card.Text>
        </Card.Body>
      </Card>
      <h2>Friday</h2>
      <Card className="card">
        <Card.Body>
          <Card.Title>Course Name</Card.Title>
          <Card.Text>
            <p>Course time</p>
            <p>Location</p>
            <Button>Remove from schedule</Button>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
    </div>
  );
}

export default Schedule;