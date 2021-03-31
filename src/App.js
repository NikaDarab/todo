import React, {useContext, useEffect} from 'react'
import './App.css';
import AuthContext from './contexts/Auth'
import TaskList from './components/TaskList';
import Login from './components/Login';

function App() {
  const { user, checkForUser } = useContext(AuthContext);

  useEffect(() => checkForUser(),[])

  return (
    <div className="App">
      <header className="App-header">
        <h3>{ user ? 'My Tasks' : null}</h3>
        {
          user ? <TaskList /> : <Login />
        }
      </header>
    </div>
  );
}

export default App;
