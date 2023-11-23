import React from "react";

let ToDoList = ({ todos, checkboxChange }) => {
  const taskStyle = {
    textDecoration: "line-through",
  };

  return (
    <ul className="tasks">
      {todos.map((todo, index) => (
        <li className="task" key={index}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => checkboxChange(index)}
          />{" "}
          <span style={todo.completed ? taskStyle : null}>{todo.task}</span>
        </li>
      ))}
    </ul>
  );
};

export default ToDoList;
