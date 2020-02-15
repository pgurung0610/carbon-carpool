import React from "react";

function Login() {
  return (
    <div className="Login">
      User Name: &nbsp;
      <input type="text" />
      <text>
        {" "}
        <br />{" "}
      </text>
      Password: &nbsp;
      <input type="text" />
      <text>
        {" "}
        <br />{" "}
      </text>
      <button>Login</button>{" "}
    </div>
  );
}

export default Login;
