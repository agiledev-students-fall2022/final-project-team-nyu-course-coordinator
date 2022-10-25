import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";


export default function Profile() {
  
  return (

    <div className="container">
      <h1 className="text-center p-5">Your Account</h1>
      <div className="schedule-container">
          <table className="table table-light table-bordered"> 
            <thead>
              <tr>
                <th> </th>
                <th>Mon</th>
                <th>Tue</th>
                <th>Wed</th>
                <th>Thu</th>
                <th>Fri</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              <tr>
                <th scope="row">8am</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">9am</th>
                <td></td>
                <td></td>
                <td className="class-calendar">CSCI UA 480 - Agile Software Development</td>
                <td></td>
                <td className="class-calendar">CSCI UA 480 - Agile Software Development</td>
              </tr>
              <tr>
                <th scope="row">10am</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">11am</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">12pm</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">1pm</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">2pm</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">3pm</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">4pm</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">5pm</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">6pm</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">7pm</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">8pm</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      <div className="scheduleBox">
        <div className="sessions">
          <h4>CORE 400</h4>
          <p className="sessionInfo">Session 001</p>
          <p className="sessionInfo">Professor John Doe</p>
          <p className="sessionInfo">Monday and Wednesdays</p>
          <p className="sessionInfo">10:30AM ~ 11:45AM</p>
          <p className="sessionInfo">Silver 420</p>
          <div className="button">
            <a href="">Change Session</a>
          </div>
          <div className="button">
            <a href="">Remove Class</a>
          </div>
        </div>
        <div className="sessions">
          <h4>MATH 121</h4>
          <p className="sessionInfo">Session 006</p>
          <p className="sessionInfo">Professor John Doe</p>
          <p className="sessionInfo">Tuesday and Thursdays</p>
          <p className="sessionInfo">12:30PM ~ 1:45PM</p>
          <p className="sessionInfo">Silver 409</p>
          <div className="button">
            <a href="">Change Session</a>
          </div>
          <div className="button">
            <a href="">Remove Class</a>
          </div>
        </div>
        <div className="sessions">
          <h4>MATH 121</h4>
          <p className="sessionInfo">Session 006</p>
          <p className="sessionInfo">Professor John Doe</p>
          <p className="sessionInfo">Tuesday and Thursdays</p>
          <p className="sessionInfo">12:30PM ~ 1:45PM</p>
          <p className="sessionInfo">Silver 409</p>
          <div className="button">
            <a href="">Change Session</a>
          </div>
          <div className="button">
            <a href="">Remove Class</a>
          </div>
        </div>
      </div>
    </div>
  )
}