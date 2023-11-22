import React from "react";

let ToDoList = ({ todos, checkboxChange }) => {
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
