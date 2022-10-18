import React from "react"

export default function (props) {
  return (
    <div className="login-page-container">
      <form className="login-page">
        <div className="login-page-content">
          <h3 className="login-page-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="login" className="btn btn-primary">
              Login
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
          <a href="#"> Forgot password?</a>
          </p>
        </div>
      </form>
    </div>
  )
}