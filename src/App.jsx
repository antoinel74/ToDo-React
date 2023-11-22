import { useState } from "react";
import "./App.css";
import InputField from "./components/Form";
import ToDoList from "./components/todoList";

function App() {
  return (
    <>
      <h1>To Do List</h1>
      <InputField />
      <ToDoList />
    </>
  );
}

export default App;
