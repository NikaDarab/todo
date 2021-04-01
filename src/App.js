import React, { useContext, useEffect } from "react";
import "./App.css";
import AuthContext from "./contexts/Auth";
import TaskList from "./components/TaskList";
import Login from "./components/Login";
import Header from "./components/Header.js/Header";
import Footer from "../src/components/Footer/Footer";

function App() {
  const { user, checkForUser } = useContext(AuthContext);

  useEffect(() => checkForUser(), []);

  return (
    <>
      <Header />

      <div className="App">{user ? <TaskList /> : <Login />}</div>
      <Footer />
    </>
  );
}

export default App;
