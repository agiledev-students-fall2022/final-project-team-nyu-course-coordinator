import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';

export default function Home() {
  return (
  <div className="px-4 py-5 my-5 text-center">
      <h1 className="fw-bold">Welcome to NYU Course Coordinator</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">Pick your classes, find the most optimal schedule, make sure you have all credits you need to graduate. All in one platform! With NYU Course Coordinator you can create your NYU class schedule and see what are the best classes to take.</p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <a href="/Login" type="button" className="btn btn-primary btn-lg px-4 gap-3">Start Now</a>
        </div>
      </div>
    </div>
    
  )
}