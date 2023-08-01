import React, { useState } from "react";
import "../styles/sass/_login.scss";
import logo from "../images/login-logo.png";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useAuth } from "../context/GlobalState";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user } = useAuth();
  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password);
  };

  console.log(user);
  return (
    <div className="login">
      <Link to="/">
        <img className="login-logo" src={logo} alt="logo" loading="lazy" />
      </Link>

      <div className="login-container">
        <h1>Sign in</h1>

        <form>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button className="login-signInBtn" type="submit">
            Sign in
          </button>

          <p>
            By continuing, you agree to Amazon's Fake Clone Conditions of Use
            and Privacy Notice.
          </p>

          <button className="login-registerBtn" onClick={register}>
            Create your Amazon Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
