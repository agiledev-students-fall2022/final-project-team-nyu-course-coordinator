import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import AddClassPopup from './Components/AddClassPopup.js';
import SortBy from './Components/SortBy.js';

export default function AllClasses() {
  
  return (

    <div className="container">
      <h1 className="text-center p-5">All Classes</h1>
      <SortBy/> 
      <br />

      <a href="/EditCart">
        <button className="add-delete-btn">Add or Delete</button>
      </a>
      <br />
      <br />
      

      <div className="scheduleBox">
        <h2>CSCI 480 - Agile Development and DevOps</h2>
        <ul>
          <li>Required for your major</li>
          <li>You have all pre-requisits</li>
        </ul>
        <h3>Available Sessions</h3>
        <div className="sessions">
          <h4>Session 002</h4>
          <p className="sessionInfo">Professor John Doe</p>
          <p className="sessionInfo">Monday and Wednesdays</p>
          <p className="sessionInfo">10:30AM ~ 11:45AM</p>
          <p className="sessionInfo">Silver 420</p>
          <span className="badge rounded-pill text-bg-warning">You have conflicting classes.</span>
          <br />
          <AddClassPopup/>
          
        </div>
        <div className="sessions">
          <h4>Session 004</h4>
          <p className="sessionInfo">Professor John Doe</p>
          <p className="sessionInfo">Tuesday and Thursdays</p>
          <p className="sessionInfo">12:30PM ~ 1:45PM</p>
          <p className="sessionInfo">Silver 409</p>
          <AddClassPopup/>
        </div>
      </div>
      <div className="scheduleBox">
        <h2>MATH 121 - Discrete Mathematics</h2>
        <ul>
          <li>Required for your major</li>
          <li>You have all pre-requisits</li>
        </ul>
        <h3>Available Sessions</h3>
        <div className="sessions">
          <h4>Session 002</h4>
          <p className="sessionInfo">Professor John Doe</p>
          <p className="sessionInfo">Monday and Wednesdays</p>
          <p className="sessionInfo">10:30AM ~ 11:45AM</p>
          <p className="sessionInfo">Silver 420</p>
          <AddClassPopup/>
        </div>
        <div className="sessions">
          <h4>Session 004</h4>
          <p className="sessionInfo">Professor John Doe</p>
          <p className="sessionInfo">Tuesday and Thursdays</p>
          <p className="sessionInfo">12:30PM ~ 1:45PM</p>
          <p className="sessionInfo">Silver 409</p>
          <AddClassPopup/>
        </div>
      </div>
      <div className="scheduleBox">
        <h2>MATH 200 - Calculus IV</h2>
        <ul>
          <li>Not required for your major</li>
          <li>You don't have all pre-requisites</li>
        </ul>
        <h3>Available Sessions</h3>
        <div className="sessions">
          <h4>Session 002</h4>
          <p className="sessionInfo">Professor John Doe</p>
          <p className="sessionInfo">Monday and Wednesdays</p>
          <p className="sessionInfo">10:30AM ~ 11:45AM</p>
          <p className="sessionInfo">Silver 420</p>
          <span className="badge rounded-pill text-bg-danger">You don't have all the pre-requisites.</span>
          
          
        </div>
        <div className="sessions">
          <h4>Session 004</h4>
          <p className="sessionInfo">Professor John Doe</p>
          <p className="sessionInfo">Tuesday and Thursdays</p>
          <p className="sessionInfo">12:30PM ~ 1:45PM</p>
          <p className="sessionInfo">Silver 409</p>
          <span className="badge rounded-pill text-bg-danger">You don't have all the pre-requisites.</span>
        </div>
      </div>
    </div>
  )
}