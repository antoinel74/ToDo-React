import React from "react";

const InputField = () => {
  return (
    <form>
      <input
        type="text"
        placeholder="Type smthg to do"
        name="input"
        id="input"
      ></input>
      <button>Submit</button>
    </form>
  );
};

export default InputField;
