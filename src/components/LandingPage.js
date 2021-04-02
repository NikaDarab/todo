import { useState } from "react";
import Login from "./Login";
import Register from "./Register";

let LandingPage = () => {
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);
  return (
    <>
      <div className={login || register ? "intro-none" : "intro"}>
        <h1>{login ? null : register ? null : "What To Do?"}</h1>
      </div>

      <div className="landing-btns">
        <button
          className="btn-create land-btn"
          style={{ display: register || login ? "none" : "inline-block" }}
          onClick={() => setRegister(!register)}
        >
          Sign Up
        </button>
        <button
          style={{ display: login || register ? "none" : "inline-block" }}
          className="btn-log land-btn"
          onClick={() => setLogin(!login)}
        >
          Login
        </button>
      </div>
      {login ? <Login login={login} setLogin={setLogin} /> : null}
      {register ? (
        <Register register={register} setRegister={setRegister} />
      ) : null}
    </>
  );
};
export default LandingPage;
