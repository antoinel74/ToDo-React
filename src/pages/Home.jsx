import React, { useState, useEffect } from "react";
import InputField from "../components/Form";
import Todolist from "../components/Todolist";
import DeleteBtn from "../components/DeleteBtn";

const LSKEY = "MyTodoApp";

function Home() {
  const [todos, setTodos] = useState(() => {
    const storedTodos = JSON.parse(
      window.localStorage.getItem(LSKEY + ".todos")
    );
    return storedTodos || [];
  });

  useEffect(() => {
    window.localStorage.setItem(LSKEY + ".todos", JSON.stringify(todos));
    console.log("Storage update:", todos); // TEST //
  }, [todos]);

  const addTask = (newTaskObject) => {
    const { task, dateTo } = newTaskObject;
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        task: newTaskObject.task,
        dateTo: newTaskObject.dateTo,
        completed: false,
      },
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
        <div className="app_container">
          <div className="controls">
            <h1>
              To<span>do</span>
            </h1>

            <InputField addTask={addTask} />
          </div>
          <div className="counters">
            <p className="counter">
              Tasks <span>{tasksCounter}</span>
            </p>
            <p className="counter">
              Completed <span>{completedTasksCounter}</span>
            </p>
          </div>
          <Todolist todos={todos} checkboxChange={checkboxChange} />
        </div>
        <DeleteBtn
          onClick={deleteCompletedTasks}
          text="Delete Completed Tasks"
        />
      </div>
    </>
  );
}

export default Home;
