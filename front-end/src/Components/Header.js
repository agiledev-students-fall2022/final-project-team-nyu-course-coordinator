import logo from '../logo.svg';
import React from 'react';

export default function Header() {
  return (
    <nav>
      <div className="container">
        <div className="left-nav">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">My Schedule</a>
            </li>
            <li>
              <a href="/">All Classes</a>
            </li>
            <li>
              <a href="/">My Account</a>
            </li>
          </ul>
        </div>
        <div className="right-nav">
          <img src={logo} className="logo" alt="logo" />
        </div>
      </div>
    </nav>
  )
}