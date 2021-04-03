import { useState, useContext } from "react";
import Login from "./Login";
import AuthContext from "../contexts/Auth";
// import Register from "./Register";

let LandingPage = () => {
  const [loginLocal, setLogin] = useState(false);
  const [register, setRegister] = useState(false);
  const [button, setButton] = useState("");
  const { login, createAccount } = useContext(AuthContext);

  let handleLogin = () => {
    setLogin(!loginLocal);
    setButton("Login");
  };

  let handleRegister = () => {
    setRegister(!register);
    setButton("Sign up");
  };
  return (
    <>
      <div className={loginLocal || register ? "intro-none" : "intro"}>
        <h1>{loginLocal ? null : register ? null : "What To Do?"}</h1>
      </div>

      <div className="landing-btns">
        <button
          className="btn-create land-btn"
          style={{ display: register || loginLocal ? "none" : "inline-block" }}
          onClick={handleRegister}
        >
          Sign up
        </button>
        <button
          style={{ display: loginLocal || register ? "none" : "inline-block" }}
          className="btn-log land-btn"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
      {loginLocal ? (
        <>
          <Login
            authorize={login}
            login={loginLocal}
            setLogin={setLogin}
            button={button}
            title={button}
          />
        </>
      ) : register ? (
        <Login
          authorize={createAccount}
          login={register}
          setLogin={setRegister}
          button={button}
          title={button}
        />
      ) : null}
    </>
  );
};
export default LandingPage;
