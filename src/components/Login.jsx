import React, { useState, useContext } from "react";
import AuthContext from "../contexts/Auth";

const Login = (props) => {
  const { login, createAccount } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login-form">
      <div style={{ display: "flex", justifyContent: "center" }}>
        {props.button}
      </div>
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

      <button
        className={props.className}
        onClick={() => props.authorize(email, password)}
      >
        {console.log(props.button)}
        {props.button}
      </button>

      <button
        className="button-delete btn-create "
        onClick={() => props.setLogin(!props.login)}
      >
        Cancel
      </button>
    </div>
  );
};

export default Login;
