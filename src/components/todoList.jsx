import React, { useState } from "react";

let ToDoList = () => {
  const initialTodos = [
    { task: "Learn React", completed: false },
    { task: "Be Awesome", completed: true },
    { task: "Try again", completed: true },
  ];

  const [todos, setTodos] = useState(initialTodos);

  const checkboxChange = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      index === i ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => checkboxChange(index)}
          />{" "}
          {todo.task}
        </li>
      ))}
    </ul>
  );
};

export default ToDoList;
