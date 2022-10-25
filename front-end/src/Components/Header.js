// import logo from '../logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';

export default function Header() {
  return (
    <nav>
      <div className="container-header">
        <div className="left-nav">
          <ul>
            <li>
              <a href="/AllClasses">All Classes</a>
            </li>
            <li>
              <a href="/MySchedule">My Schedule</a>
            </li>
            <li>
              <a href="/Profile">Profile</a>
            </li>
          </ul>
        </div>
        {/* <div className="right-nav">
          <img src={logo} className="logo" alt="logo" />
        </div> */}
      </div>
    </nav>
  )
}