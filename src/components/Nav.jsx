import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <li>
        <Link to="/">List</Link>
      </li>
      <li>
        <Link to="/">Calendar</Link>
      </li>
    </nav>
  );
};

export default Navbar;
