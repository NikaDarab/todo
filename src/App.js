import React, { useContext, useEffect } from "react";
import "./App.css";
import AuthContext from "./contexts/Auth";
import TaskList from "./components/TaskList";
import Login from "./components/Login";
import Header from "./components/Header.js/Header";

function App() {
  const { user, checkForUser } = useContext(AuthContext);

  useEffect(() => checkForUser(), []);

  return (
    <>
      <Header />
      <div className="App">
        {/* <div className="App-header"> */}
        {/* <h3 className="list-title">{user ? "My Tasks" : null}</h3> */}
        {user ? <TaskList /> : <Login />}
        {/* </div> */}
      </div>
    </>
  );
}

export default App;
