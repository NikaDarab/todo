import React, { useContext, useEffect } from "react";
import "./App.css";
import AuthContext from "./contexts/Auth";
import TaskList from "./components/TaskList";
import Header from "./components/Header.js/Header";
import Footer from "../src/components/Footer/Footer";
import { Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";

function App() {
  const { user, checkForUser } = useContext(AuthContext);

  useEffect(() => checkForUser(), []);

  return (
    <>
      <Header />

      <div className="App">{user ? <TaskList /> : <LandingPage />}</div>
      <Footer />
    </>
  );
}

export default App;
