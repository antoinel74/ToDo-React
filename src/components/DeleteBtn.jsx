import React from "react";

const DeleteBtn = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

export default DeleteBtn;
