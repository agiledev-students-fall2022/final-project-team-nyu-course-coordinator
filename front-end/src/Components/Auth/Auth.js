import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signin, signup } from '../../actions/auth';
import Input from './Input';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { GoogleLogin } from '@react-oauth/google';
// import Form from 'react-bootstrap/Form';

const initialState = { firstName: '', lastName: '', email: '', password: '' };

const Auth = () => {
  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const switchMode = () => {
    setForm(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      dispatch(signup(form, navigate));
    } else {
      dispatch(signin(form, navigate));
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;
    try {
      dispatch({ type: 'AUTH', data: { result, token } });
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  const googleFailure = (error) => {
    console.log(error);
    console.log('Google Sign In was unsuccessful. Try again later');
  };

  return (
    <Container>
      <h1 className="mt-5">{isSignup ? 'Sign Up' : 'Sign In'}</h1>

        <form onSubmit={handleSubmit}>
            { isSignup && (
                <>
                  <Input name="firstName" label="First Name" handleChange={handleChange} half/>
                  <Input name="lastName" label="Last Name" handleChange={handleChange} half/>
                  {/* {['checkbox'].map((type) => (
                    <div key={`default-${type}`} className="mb-3">
                      <Form.Check
                        label={`default ${type}`}
                        name="group1"
                        id={`default-${type}`}
                        type={type}
                      />
                      <Form.Check
                        label={`default ${type}`}
                        name="group1"
                        type={type}
                        id={`default-${type}`}
                      />
                      <Form.Check
                        label={`default ${type}`}
                        type={type}
                        id={`default-${type}`}
                      />
                    </div>
                  ))} */}
                </>
            )}
            <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
            <Input name="password" label="Password" handleChange={handleChange} type="password"/>
          <div className="d-grid gap-2 mt-3">
            <Button className="btn btn-secondary" type="submit">
              { isSignup ? 'Sign Up' : 'Sign In' }
            </Button>
            <Button className="btn btn-light" onClick={switchMode}>
              { isSignup ? 'Already have an account? Sign In' : "Don't have an account? Sign Up" }
            </Button>
            <GoogleLogin 
                clientId="261702453032-hhor34vsg5ufh7bnn99upoi5ph6e980v.apps.googleusercontent.com"
                render={(renderProps) => (
                  <Button 
                    onClick={renderProps.onClick} 
                    disabled={renderProps.disabled}>
                      Google Sign In
                  </Button>
                )}
                onSuccess={googleSuccess}
                onFailure={googleFailure}
              />
          </div>
        </form>
    </Container>
  )
}

export default Auth