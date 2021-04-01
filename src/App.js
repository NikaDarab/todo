import React, { useContext, useEffect } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./App.css";
import AuthContext from "./contexts/Auth";
import TaskList from "./components/TaskList";
import Login from "./components/Login";
import Header from "./components/Header.js/Header";
import Routes from "../src/components/Route/Route";

function App() {
  const { user, checkForUser } = useContext(AuthContext);

  useEffect(() => checkForUser(), []);

  return (
    <>
      <Header />

      <div className="App">{user ? <TaskList /> : <Login />}</div>
    </>
  );
}

export default App;
