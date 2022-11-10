import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { HouseDoorFill, CardList, Calendar3, PersonCircle } from 'react-bootstrap-icons';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const Menu = () => {

  return (
    <Navbar className="containerMenu">
      <Container>
          <Nav>
            <div className="itemMenu">
              <HouseDoorFill className="icon" color="white" />
              <Nav.Link className="navItem" href="/">
                Home
              </Nav.Link>
            </div>
            <div className="itemMenu">
              <CardList className="icon" color="white" />
              <Nav.Link className="navItem" href="/courses">
                Courses
              </Nav.Link>
            </div>
            <div className="itemMenu">
              <Calendar3 className="icon" color="white" />
              <Nav.Link className="navItem" href="/schedule">
                Schedule
              </Nav.Link>
            </div>
            <div className="itemMenu">
              <PersonCircle className="icon" color="white" />
              <Nav.Link className="navItem" href="/profile">
                Profile
              </Nav.Link>
            </div>
          </Nav>
      </Container>
    </Navbar>
  );
}

export default Menu;