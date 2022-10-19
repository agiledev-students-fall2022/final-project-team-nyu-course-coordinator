import React from 'react';



export default function Profile() {
  
  return (
    <div className="container-profile">
      <div className="profile-page">
        <div className="field-container">
          <div className="field">John Doe
            <div className="edit-field">
              <a href="/">Edit</a>
            </div>
          </div>
        </div>
        <div className="field-container">
          <div className="field">john@email.com
            <div className="edit-field">
              <a href="/">Edit</a>
            </div>
          </div>
        </div>
        <div className="field-container">
          <div className="field">Computer Science
            <div className="edit-field">
              <a href="/">Edit</a>
            </div>
          </div>
        </div>
        <div className="field-container">
          <div className="field">Junior
            <div className="edit-field">
              <a href="/">Edit</a>
            </div>
          </div>
        </div>
        <div className="schedule-container">
          <div className="schedule">
            
          </div>
        </div>
      </div>
    </div>
  )
}