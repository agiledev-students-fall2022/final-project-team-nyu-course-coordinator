import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';

export default function Footer() {
  return (
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item"><a href="'/" className="nav-link px-2 text-muted">Home</a></li>
          <li className="nav-item"><a href="/Allclasses" className="nav-link px-2 text-muted">All classes</a></li>
          <li className="nav-item"><a href="/MySchedule" className="nav-link px-2 text-muted">My Schedule</a></li>
          <li className="nav-item"><a href="/Profile" className="nav-link px-2 text-muted">Profile</a></li>
          <li className="nav-item"><a href="/SignOut" className="nav-link px-2 text-muted">Sign Out</a></li>
        </ul>
        <p className="text-center text-muted">&copy; Course Coordinator - Agile DevOps NYU 2022</p>
      </footer>
  )
}