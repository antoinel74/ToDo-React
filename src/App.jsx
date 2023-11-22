import React, { useState, useEffect } from "react";
import "./App.css";
import InputField from "./components/Form";
import ToDoList from "./components/todoList";

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
    console.log("Todos to be stored:", todos);
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

  return (
    <>
      <h1>To Do List</h1>
      <div>
        <InputField addTask={addTask} />
        <ToDoList todos={todos} checkboxChange={checkboxChange} />
      </div>
    </>
  );
}

export default App;
