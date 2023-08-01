import React from "react";
import "../styles/sass/_login.scss";
import logo from "../images/login-logo.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <Link to="/">
        <img className="login-logo" src={logo} alt="logo" loading="lazy" />
      </Link>

      <div className="login-container">
        <h1>Sign in</h1>
        <form>
          <label>Email</label>
          <input type="email" value="" />

          <label>Password</label>
          <input type="password" value="" />
          <button className="login-signInBtn" type="submit">
            Sign in
          </button>

          <p>
            By continuing, you agree to Amazon's Fake Clone Conditions of Use
            and Privacy Notice.
          </p>

          <button className="login-registerBtn">
            Create your Amazon Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
