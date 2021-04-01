import React, { createContext, useState } from "react";
import {
  fbAddTask,
  fbGetTasks,
  fbUpdateTask,
  fbDeleteTask,
} from "../services/firebase";
import { v4 as uuidv4 } from "uuid";
const TaskContext = createContext();
export default TaskContext;

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  async function getTasks(userID) {
    await fbGetTasks(userID).then((response) => {
      setTasks(response);
    });
  }

  async function addTask(task) {
    await fbAddTask(task).then(() => {
      setTasks([
        ...tasks,
        {
          id: uuidv4(),
          task,
          complete: false,
        },
      ]);

      // console.log([tasks]);
      //todo: add the new task you just created to the tasks state
    });
  }

  async function updateTask(task) {
    await fbUpdateTask(task).then(() => {
      //todo: update the task in the local state that was completed/uncompleted
      setTasks(() => [...tasks]);
    });
  }

  async function deleteTask(foundTask) {
    let newArray = tasks.filter((task) => task != foundTask);
    setTasks(() => [...newArray]);
    await fbDeleteTask(foundTask).then(() => {
      //todo: update the task in the local state that was deleted
      console.log(foundTask);

      // setTasks(() => [...tasks]);
    });
  }
  return (
    <TaskContext.Provider
      value={{
        tasks: tasks,
        setTasks,
        getTasks,
        addTask,
        updateTask,
        deleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
