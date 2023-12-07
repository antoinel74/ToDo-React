import React, { useRef } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { convertDateFormat } from "../utils/convertDate";

let Todolist = ({ todos, checkboxChange }) => {
  const taskStyle = {
    textDecoration: "line-through",
    opacity: 0.4,
  };

  const nodeRef = useRef(null);

  return (
    <ul className="tasks">
      <TransitionGroup component={null}>
        {todos.map((todo, index) => (
          <CSSTransition
            key={index}
            classNames="fade"
            timeout={330}
            nodeRef={nodeRef}
          >
            <li className="task fade" key={index} ref={nodeRef}>
              <div>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => checkboxChange(index)}
                />{" "}
                <span style={todo.completed ? taskStyle : null}>
                  {todo.task}
                </span>
              </div>
              <span style={todo.completed ? taskStyle : null}>
                {convertDateFormat(todo.dateTo)}
              </span>
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};

export default Todolist;
