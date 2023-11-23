import React, { useRef } from "react";

const InputField = ({ addTask }) => {
  const inputRef = useRef();

  function clickHandler() {
    const inputElement = inputRef.current;
    const newTask = inputElement.value;
    addTask(newTask);
    inputElement.value = "";
  }

  return (
    <form>
      <input
        ref={inputRef}
        type="text"
        placeholder="Type smthg to do"
        className="input"
        id="input"
      ></input>
      <button className="addBtn" type="button" onClick={clickHandler}>
        +
      </button>
    </form>
  );
};

export default InputField;
