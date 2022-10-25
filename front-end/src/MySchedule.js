import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import RemoveClassPopup from './Components/RemoveClassPopup.js';
import SessionChangePopup from './Components/SessionChangePopup.js';

export default function Profile() {
  
  return (

    <div className="container">
      <h1 className="text-center p-5">My Schedule</h1>
      <div className="schedule-container">
          <table className="table table-responsive table-light table-bordered"> 
            <thead>
              <tr>
                <th> </th>
                <th>Sun</th>
                <th>Mon</th>
                <th>Tue</th>
                <th>Wed</th>
                <th>Thu</th>
                <th>Fri</th>
                <th>Sat</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              <tr>
                <th scope="row">6am</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">7am</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">8am</th>
                <td></td>
                <td></td>
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
                <td></td>
                <td className="class-calendar">
                  <div className="class-info">
                    CSCI UA 480 - Agile Software Development
                  </div> 
                </td>
                <td></td>
                <td className="class-calendar">
                  <div className="class-info">
                    CSCI UA 480 - Agile Software Development
                  </div> 
                </td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">10am</th>
                <td></td>
                <td></td>
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
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">12pm</th>
                <td></td>
                <td></td>
                <td className="class-calendar">
                  <div className="class-info">
                  MATH 121 - Discrete Mathematics
                  </div> 
                </td>
                <td></td>
                <td className="class-calendar">
                  <div className="class-info">
                  MATH 121 - Discrete Mathematics
                  </div> 
                </td>
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
                <td></td>
                <td></td> 
              </tr>
              <tr>
                <th scope="row">9pm</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td> 
              </tr>
              <tr>
                <th scope="row">10pm</th> 
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">11pm</th> 
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <h1 className="text-center p-5">Your Classes</h1>
      <div className="scheduleBox">
        <div className="sessions">
          <h4>CSCI 480</h4>
          <p className="sessionInfo">Session 001</p>
          <p className="sessionInfo">Professor John Doe</p>
          <p className="sessionInfo">Monday and Wednesdays</p>
          <p className="sessionInfo">9AM ~ 10AM</p>
          <p className="sessionInfo">Silver 420</p>
          <div className="btn">
            <SessionChangePopup/>
          </div>
          <div className="btn">
            <RemoveClassPopup/>
          </div>
        </div>
        
        <div className="sessions">
          <h4>MATH 121</h4>
          <p className="sessionInfo">Session 006</p>
          <p className="sessionInfo">Professor John Doe</p>
          <p className="sessionInfo">Tuesday and Thursdays</p>
          <p className="sessionInfo">12PM ~ 1PM</p>
          <p className="sessionInfo">Silver 409</p>
          <div className="btn">
            <SessionChangePopup/>
          </div>
          <div className="btn">
            <RemoveClassPopup/>
          </div>
        </div>
      </div>
    </div>
  )
}