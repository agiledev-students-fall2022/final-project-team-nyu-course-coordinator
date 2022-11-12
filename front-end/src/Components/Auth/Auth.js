// import React, { useState } from "react";
// import Input from "./Input";

// export default function (props) {
//   let [loginMode, setloginMode] = useState("signin")

//   const changeloginMode = () => {
//     setloginMode(loginMode === "signin" ? "signup" : "signin")
//   }
//   const [tnc,setTnc]=useState(false);

//   if (loginMode === "signin") {
//     return (
//       <div className="login-form-container">
//         <form className="login-form">
//           <div className="login-form-content">
//             <h3 className="login-form-title">Sign In</h3>
//             <div className="text-center">
//               Not registered yet?{" "}
//               <span className="link-primary" onClick={changeloginMode}>
//                 Sign Up
//               </span>
//             </div>
//             <div className="form-group mt-3">
//               <Input name="name" label="Name" type="name" placeholder="Enter name" />
//             </div>
//           </div>
//           <div className="form-group mt-3">
//             <Input name="email" label="Email" type="email" placeholder="Enter NYU email" />
//           <div className="form-group mt-3">
//             <Input name="password" label="Password" type="password" placeholder="Enter password" />
//           </div>
//             <div className="form-group mt-3">
//               <Input name="major" label="Major" type="major" placeholder="Enter major" />
//           </div>

//           <div className="form-group mt-3">
//             <label>What classes have you previously taken?</label>
//             <br></br>
//             <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)} /><span> Intro to CS</span>
//             <br></br>
//             <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)} /><span> Discrete Math</span>
//             <br></br>
//             <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)} /><span> Data Structures</span>
//             <br></br>
//             <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)} /><span> Basic Algorithms</span>
//             <br></br>
//             <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)} /><span> Computer Systems Organization</span>
//             <br></br>
//             <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)} /><span> Software Engineering</span>
//             <br></br>
//             <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)} /><span> Operating Systems</span>
//             <br></br>
//           </div>



//             <div className="d-grid gap-2 mt-3">
//               <button type="submit" className="btn btn-primary">
//                 Submit
//               </button>
//             </div>
//             <p className="text-center mt-2">
//             <a href="#">Forgot your password?</a>
//             </p>
//           </div>
//         </form>
//       </div>
//     )
//   }


//   return (
//     <div className="login-form-container">
//       <form className="login-form">
//         <div className="login-form-content">
//           <h3 className="login-form-title">Sign In</h3>
//           <div className="text-center">
//             Already registered?{" "}
//             <span className="link-primary" onClick={changeloginMode}>
//               Sign In
//             </span>
//           </div>
//           <div className="form-group mt-3">
//             <label>What is your name?</label>
//             <input
//               type="text"
//               className="form-control mt-1"
//               placeholder="e.g Jane Doe"
//             />
//           </div>
//           <div className="form-group mt-3">
//             <label>What is your NYU Email?</label>
//             <input
//               type="email"
//               className="form-control mt-1"
//               placeholder="Email Address"
//             />
//           </div>
//           <div className="form-group mt-3">
//             <label>Please enter a password</label>
//             <input type="password"
//               className="form-control mt-1"
//               placeholder="Password"
//             />
//           </div>

//           <div className="form-group mt-3">
//             <label>What is your major and school?</label>
//             <br></br>
//               <select>
//               <option value="casCS">Computer Science at CAS</option>
//               <option value="tandonCS">Computer Science at Tandon </option>
//               </select>
//           </div>

//           <div className="form-group mt-3">
//             <label>What classes have you previously taken?</label>
//             <br></br>
//             <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)} /><span> Intro to CS</span>
//             <br></br>
//             <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)} /><span> Discrete Math</span>
//             <br></br>
//             <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)} /><span> Data Structures</span>
//             <br></br>
//             <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)} /><span> Basic Algorithms</span>
//             <br></br>
//             <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)} /><span> Computer Systems Organization</span>
//             <br></br>
//             <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)} /><span> Software Engineering</span>
//             <br></br>
//             <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)} /><span> Operating Systems</span>
//             <br></br>
//           </div>


//           <div className="d-grid gap-2 mt-3">
//             <button type="submit" className="btn btn-primary">
//               Submit
//             </button>
//           </div>
//           <p className="text-center mt-2">
//           <a href="#"> Forgot password?</a>
//           </p>
//         </div>
//       </form>
//     </div>
//   )


// }

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signin, signup } from '../../actions/auth';
import Input from './Input';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

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


  return (
    <Container>
      <h1>{isSignup ? 'Sign Up' : 'Sign In'}</h1>
        <form onSubmit={handleSubmit}>
          <Container>
            { 
              isSignup && (
                <>
                  <Input name="firstName" label="First Name" handleChange={handleChange} half/>
                  <Input name="lastName" label="Last Name" handleChange={handleChange} half/>
                </>
              )
            }
            <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
            <Input name="password" label="Password" handleChange={handleChange} type="password"/>
          </Container>
          
          <Button type="submit">
            { isSignup ? 'Sign Up' : 'Sign In' }
          </Button>
            <Button onClick={switchMode}>
              { isSignup ? 'Already have an account? Sign In' : "Don't have an account? Sign Up" }
            </Button>
        </form>
    </Container>
  )
}

export default Auth