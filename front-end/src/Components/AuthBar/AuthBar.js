import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import * as actionType from '../../constants/actionTypes';
import decode from 'jwt-decode';

const AuthBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });
    navigate('/');
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  return (
    <Navbar className="navbar bg-light">
      <Container>
        
          <Nav>
            <div className="navbar-nav">
              <Nav.Link className="nav-item" href="/auth">
                { user?.result ? (
                  <div className="d-grid gap-2 d-flex justify-content-end">
                    <div className="btn btn-sm btn-light me-2 disabled">Welcome, {user?.result.name}</div>
                    <div className="btn btn-sm btn-dark" onClick={logout}>Logout</div>
                  </div>
                ) : (
                  <div className="nav-link" to="/auth">Sign In</div>
                )}
              </Nav.Link>
            </div>
          </Nav>
      </Container>
    </Navbar>
  );
}

export default AuthBar;