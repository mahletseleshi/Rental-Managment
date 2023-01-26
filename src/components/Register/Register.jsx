import React from 'react'
import { Link } from "react-router-dom";
import "./register.css";


const Register = () => {
  return (
    <div className="box-container">
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form className="Register__form">
        <h3>Create an account</h3>
          <div className="Register__label">
        <label for="Full Name">Full Name</label>
        <input type="text" placeholder="Full Name" id="fullname" />

        <label for="Email">Email</label>
        <input type="text" placeholder="Email" id="email" />

        <label for="Password">Password</label>
        <input type="Password" placeholder="Password" id="password" />

        <label for="confirm password">Comfirm Password</label>
        <input type="password" placeholder="Confirm Password" id="confirm password" />
        </div>
        <Link to={"/"}>
          <button>Sign Up</button>
        </Link>
        <div className="other-option">
          <p>Already have an account?</p>
          <Link to={'/login'} className="login-link">Login</Link>
        </div>
        {/* <div className="social">
          <div className="go">
          <i className="fab fa-google"></i> Google
          </div>
          <div className="fb">
          <i className="fab fa-facebook"></i> Facebook
          </div>
        </div> */}
      </form>
    </div>
  )
}

export default Register
