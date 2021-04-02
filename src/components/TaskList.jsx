import React, { useState, useContext, useEffect } from "react";
import TaskContext from "../contexts/Task";
import AuthContext from "../contexts/Auth";

function TaskList() {
  const { user } = useContext(AuthContext);
  let emptyTask = {
    category: "",
    name: "",
    completed: false,
    uid: user.uid,
  };
  const [newTask, setNewTask] = useState(false);
  const [showList, setList] = useState(false);
  const [task, setTask] = useState(emptyTask);
  let { tasks, addTask, updateTask, getTasks, deleteTask } = useContext(
    TaskContext
  );

  useEffect(() => {
    getTasks(user.uid);
  }, [user]);

  const updateCompleted = (task) => {
    task.task.completed = !task.task.completed;
    updateTask(task);
  };
  const handleDelete = (taskId) => {
    let foundTask = tasks.find((task) => task.id === taskId);
    // console.log(deletedTask);
    deleteTask(foundTask);
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
    const { value } = e.target;
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
    const { value } = e.target;
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
      <div className="add-btn">
        <div
          style={{ padding: "0 100px" }}
          onClick={() => setNewTask(!newTask)}
        >
          {!newTask ? (
            <i className="fas fa-plus fa-2x add"></i>
          ) : (
            <i className="fas fa-times fa-2x"></i>
          )}
        </div>
        <div style={{ padding: "0 100px" }} onClick={() => setList(!showList)}>
          {!showList ? (
            <i className="fas fa-eye fa-2x add"></i>
          ) : (
            <i className="fas fa-eye-slash fa-2x"></i>
          )}
        </div>
      </div>

      <div>
        {newTask && (
          <div className="form-inline">
            <label htmlFor="category">category</label>
            <input
              type="text"
              value={task.category}
              onChange={handleCategoryChange}
              name="category"
              required
              className="task-input"
            />
            <label htmlFor="name">name</label>
            <input
              type="text"
              value={task.name}
              onChange={handleNameChange}
              name="name"
              required
              className="task-input"
            />
            <button
              disabled={
                task.name.length === 0 || task.category.length === 0
                  ? true
                  : false
              }
              style={{
                backgroundColor:
                  task.name.length && task.category.length
                    ? "dodgerblue"
                    : null,
              }}
              onClick={saveTask}
            >
              save
            </button>{" "}
            <br />
            <button className="button-delete" onClick={cancelTask}>
              cancel
            </button>
          </div>
        )}
      </div>
      <div className="table">
        {!showList && (
          <table>
            <>
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Name</th>
                  <th>Completed</th>
                </tr>
              </thead>
            </>
            <tbody>
              {tasks.map((task) => (
                <tr key={task.id}>
                  <td>{task.task.category}</td>
                  <td>{task.task.name}</td>
                  <td>
                    <input
                      style={{ margin: "12px 0" }}
                      type="checkbox"
                      checked={task.task.completed}
                      onChange={() => updateCompleted(task)}
                    />
                  </td>
                  <td>
                    <div onClick={() => handleDelete(task.id)}>
                      <i className="fas fa-trash"></i>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* <button onClick={logout}>Logout</button> */}
    </div>
  );
}

export default TaskList;
