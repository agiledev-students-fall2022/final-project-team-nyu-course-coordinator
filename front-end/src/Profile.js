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
    
    </div>
  )
}