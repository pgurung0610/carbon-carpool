import React from "react";
import "./Login.css"
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="Login">
      User Name: &nbsp;
      <input type="text" />
        <br />
      Password: &nbsp;
      <input type="text" />
        <br />
      <Link to='/home'>
        <button>Login</button>
      </Link>
    </div>
  );
}

export default Login;
