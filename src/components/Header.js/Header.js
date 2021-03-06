import React, { useContext } from "react";
import AuthContext from "../../contexts/Auth";

let Header = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <>
      <header className="App-header">
        <h1>
          <li>TODO</li>

          <li className="auth-link" onClick={logout}>
            {user ? "Logout" : null}
          </li>
        </h1>
      </header>
    </>
  );
};

export default Header;
