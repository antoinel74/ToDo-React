import React from "react";

const DeleteBtn = ({ onClick, text }) => {
  return (
    <button className="deleteBtn" onClick={onClick}>
      {text}
    </button>
  );
};

export default DeleteBtn;
