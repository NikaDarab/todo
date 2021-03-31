import React, { useState, useContext } from 'react';
import AuthContext from '../contexts/Auth';

const Login = () => {
  const {login, createAccount} = useContext(AuthContext)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <h3>{createAccount ? "Create Account" : "Login"}</h3>
      <input placeholder="Email" type="text" onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="password" type="password" onChange={(e) => setPassword(e.target.value)}/>
      <button onClick={() => login(email, password)}>Login</button>
      <button onClick={() => createAccount(email, password)}>Create Account</button>
    </div>
  )
}

export default Login;