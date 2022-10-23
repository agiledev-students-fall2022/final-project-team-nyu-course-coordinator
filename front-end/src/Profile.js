import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";


export default function Profile() {
  
  return (

    <div className="container">
      <h1 className="text-center p-5">Your Account</h1>
      <div className="container profile-page">
        <ul className="list-group">
          <li className="list-group-item list-group-item-action">
            John Doe
            <a className="edit-field" href="/">Edit</a>
          </li>
          <li className="list-group-item list-group-item-action">
            johndoe@email.com
            <a className="edit-field" href="/">Edit</a>
          </li>
          <li className="list-group-item list-group-item-action">
            Computer Science
            <a className="edit-field" href="/">Edit</a>
          </li>
          <li className="list-group-item list-group-item-action">
            Junior
            <a className="edit-field" href="/">Edit</a>
          </li>
        </ul>
      </div>
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
    </div>
  )
}