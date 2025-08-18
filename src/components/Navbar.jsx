import React from "react";
import Dropdown from "./Dropdown";

const Navbar = () => {
  return (
    <div className="Navbar">
      <ul>
        <li>
          <Dropdown />
        </li>
        <li>
          <Dropdown />
        </li>
        <li>
          <Dropdown />
        </li>
        <li>
          <Dropdown />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
