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
        name="input"
        id="input"
      ></input>
      <button type="button" onClick={clickHandler}>
        Add
      </button>
    </form>
  );
};

export default InputField;
