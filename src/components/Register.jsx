import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../contexts/Auth";

const Login = () => {
  const { login, createAccount } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login-form">
      {/* <div>{createAccount ? "Create Account" : "Login"}</div> */}
      <div>
        <input
          className="login-input"
          placeholder="Email"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <input
          className="login-input"
          placeholder="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button className="btn-log" onClick={() => login(email, password)}>
        Login
      </button>

      <button
        className="btn-create"
        onClick={() => createAccount(email, password)}
      >
        Create Account
      </button>
    </div>
  );
};

export default Login;
