import React, { useRef, useState } from "react";

const InputField = ({ addTask }) => {
  const inputRef = useRef();
  const [error, setError] = useState(false);

  function clickHandler() {
    const inputElement = inputRef.current;
    const newTask = inputElement.value.trim();

    if (newTask) {
      addTask(newTask);
      inputElement.value = "";
      setError(false);
    } else {
      setError(true);
    }
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
      {error && <p>Please enter a task!</p>}
    </form>
  );
};

export default InputField;
