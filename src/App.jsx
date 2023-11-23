import React, { useState, useEffect } from "react";
import "./App.css";
import InputField from "./components/Form";
import ToDoList from "./components/TodoList";
import DeleteBtn from "./components/DeleteBtn";
import Navbar from "./components/Nav";
import { Route, Routes } from "react-router-dom";

const LSKEY = "MyTodoApp";

function App() {
  const [todos, setTodos] = useState(() => {
    const storedTodos = JSON.parse(
      window.localStorage.getItem(LSKEY + ".todos")
    );
    return storedTodos || [];
  });

  useEffect(() => {
    window.localStorage.setItem(LSKEY + ".todos", JSON.stringify(todos));
    console.log("Todos to be stored:", todos); // TEST //
  }, [todos]);

  const addTask = (newTask) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { task: newTask, completed: false },
    ]);
  };

  const checkboxChange = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      index === i ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteCompletedTasks = () => {
    const incompleteTasks = todos.filter((todo) => !todo.completed);
    setTodos(incompleteTasks);
  };

  const tasksCounter = todos.length;
  const completedTasksCounter = todos.filter((todo) => todo.completed).length;

  return (
    <>
      <div className="app">
        <h1>
          to<span>do</span>
        </h1>
        <div className="controls">
          <InputField addTask={addTask} />
          <DeleteBtn
            onClick={deleteCompletedTasks}
            text="Delete Completed Tasks"
          />
        </div>
        <div className="counters">
          <p className="counter">
            Tasks <span>{tasksCounter}</span>
          </p>
          <p className="counter">
            Completed <span>{completedTasksCounter}</span>
          </p>
        </div>
        <ToDoList todos={todos} checkboxChange={checkboxChange} />
      </div>
    </>
  );
}

export default App;
