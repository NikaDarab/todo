import React, { useState, useContext, useEffect } from "react";
import TaskContext from "../contexts/Task";
import AuthContext from "../contexts/Auth";

function TaskList() {
  const { user, logout } = useContext(AuthContext);
  let emptyTask = {
    category: "",
    name: "",
    completed: false,
    uid: user.uid,
  };
  const [newTask, setNewTask] = useState(false);
  const [task, setTask] = useState(emptyTask);
  const { tasks, addTask, updateTask, getTasks } = useContext(TaskContext);

  useEffect(() => {
    getTasks(user.uid);
  }, [user]);

  const updateCompleted = (task) => {
    task.task.completed = !task.task.completed;
    updateTask(task);
  };

  const saveTask = () => {
    addTask(task).then(() => cancelTask(/*complete the cancel task todo*/));
  };

  const cancelTask = () => {
    //todo: reset the task state and hide the form
    setNewTask(!newTask);
    // console.log(task);
  };
  // todo: update the task state with these variables
  const handleCategoryChange = (e) => {
    const { name, value } = e.target;
    let updateCateogryEmptyTask = {
      category: value,
      name: task.name,
      completed: false,
      uid: user.uid,
    };
    setTask(updateCateogryEmptyTask);
    // console.log(task);
  };
  const handleNameChange = (e) => {
    const { name, value } = e.target;
    let updateNameEmptyTask = {
      category: task.category,
      name: value,
      completed: false,
      uid: user.uid,
    };
    setTask(updateNameEmptyTask);
    // console.log(task);
  };

  return (
    <div className="TaskList">
      <button
        onClick={() => {
          setNewTask(!newTask);
        }}
      >
        +
      </button>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Name</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {newTask && (
            <tr>
              <td>
                <input
                  type="text"
                  defaultValue={task.category}
                  onChange={handleCategoryChange}
                  name="category"
                />
              </td>
              <td>
                <input
                  type="text"
                  defaultValue={task.name}
                  onChange={handleNameChange}
                  name="name"
                />
              </td>
              <td>
                <button
                  disabled={
                    task.name.length === 0 || task.category.length === 0
                      ? true
                      : false
                  }
                  onClick={saveTask}
                >
                  save
                </button>{" "}
                <br />
                <button onClick={cancelTask}>cancel</button>
              </td>
            </tr>
          )}
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.task.category}</td>
              <td>{task.task.name}</td>
              <td>
                <input
                  type="checkbox"
                  checked={task.task.completed}
                  onChange={() => updateCompleted(task)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default TaskList;
