import React, { useContext, useEffect } from "react";
import "./App.css";
import AuthContext from "./contexts/Auth";
import TaskList from "./components/TaskList";
import Login from "./components/Login";
import Header from "./components/Header.js/Header";
import Footer from "../src/components/Footer/Footer";
import Register from "../src/components/Register";
import { Route, Switch } from "react-router-dom";

function App() {
  const { user, checkForUser } = useContext(AuthContext);

  useEffect(() => checkForUser(), []);

  return (
    <>
      <Header />

      <Route exact path="/register" component={Register} />

      <div className="App">{user ? <TaskList /> : <Register />}</div>
      <Footer />
    </>
  );
}

export default App;
