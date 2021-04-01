import React from "react";

let Header = () => {
  return (
    <>
      <header className="header">
        <nav>
          <li>TODO</li>
          <li style={{ float: "right" }}>Logout</li>
          <li style={{ float: "right" }}>Login</li>
        </nav>
      </header>
    </>
  );
};

export default Header;
