import React, { useRef, useState } from "react";

const InputField = ({ addTask }) => {
  const inputRef = useRef();
  const dateToRef = useRef();
  const [error, setError] = useState(false);

  function clickHandler() {
    const inputElement = inputRef.current;
    const dateToElement = dateToRef.current;
    const newTask = inputElement.value.trim();
    const toDate = dateToElement.value;

    if (newTask && toDate) {
      addTask({
        task: newTask,
        dateTo: toDate,
      });
      inputElement.value = "";
      dateToElement.value = "";
      setError(false);
    } else {
      setError(true);
    }
  }

  const handleDateFocus = () => {
    dateToRef.current.type = "date";
  };

  const handleDateBlur = () => {
    dateToRef.current.type = "text";
  };

  return (
    <form>
      <input
        ref={inputRef}
        type="text"
        placeholder="Type smthg to do"
        className="input"
        id="input"
      ></input>
      <div>
        <input
          className="input"
          type="text"
          placeholder="Fix a deadline"
          onFocus={handleDateFocus}
          onBlur={handleDateBlur}
          id="dateTo"
          ref={dateToRef}
        ></input>
        <button className="addBtn" type="button" onClick={clickHandler}>
          +
        </button>
      </div>
      {error && <p>Please enter a task!</p>}
    </form>
  );
};

export default InputField;
