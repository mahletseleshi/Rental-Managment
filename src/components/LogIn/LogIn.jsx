import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

const LogIn = () => {
  return (
    <div className="box-container">
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form className="Login__form">
        <h3>Login to your account</h3>
        <div className="Login__label">
        <label for="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username" />
        <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password" />
        </div>
        <Link to={"/"}>
          <button>Log In</button>
        </Link>
        <div className="other-option">
          <p>Don't have an account?</p>
          <Link to={'/signup'} className="register-link">Register</Link>
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
  );
};

export default LogIn;
