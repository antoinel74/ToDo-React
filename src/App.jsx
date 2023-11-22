import { useState } from "react";
import "./App.css";
import SubmitBtn from "./components/submitBtn";
import InputField from "./components/input";
import ToDoList from "./components/todoList";

function App() {
  return (
    <>
      <h1>To Do List</h1>
      <form>
        <InputField />
        <SubmitBtn />
      </form>
      <ToDoList />
    </>
  );
}

export default App;
