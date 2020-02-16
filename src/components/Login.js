import React from "react";
import "./Login.css"
import { Link } from "react-router-dom";

function Login() {
  let validateLogin = function(e) {
    // alert("It works!");
  }

  return (
    <form onSubmit={validateLogin} className="Login">
      User Name: &nbsp;
      <input id="username" type="text" />
        <br />
      Password: &nbsp;
      <input id="password" type="text"/>
        <br />
      <Link to='/home'>
        <button>Login</button>
      </Link>
    </form>
  );
}

export default Login;
