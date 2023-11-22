import React from "react";

let ToDoList = (props) => {
  return (
    <div>
      <h2>Todos</h2>
      <ul>
        <li>
          <input type="checkbox" name="todolist" />
          Learn React
        </li>
        <li>
          <input type="checkbox" name="todolist" />
          Be Awesome !
        </li>
      </ul>
    </div>
  );
};

export default ToDoList;
