import React, { useState } from "react";
import "../styles/utilities/_helpers.scss";
import "../styles/components/_dropdown.scss";

const Dropdown = ({ dropdownText, icon }) => {
  const [isActive, setIsActive] = useState("");

  function handleClick() {
    setIsActive((prev) => (prev === "active" ? "" : "active"));
  }
  return (
    <>
      <p className="dropdown__link" onClick={handleClick}>
        {dropdownText}
        <span className={isActive ? "rotate" : ""}>{icon}</span>
      </p>
      <ul className={`dropdown__menu ${isActive ? "" : "hidden"}`}>
        <li>Lorem</li>
        <li>Lorem</li>
        <li>Lorem</li>
        <li>Lorem</li>
        <li>Lorem</li>
        <li>Lorem</li>
        <li>Lorem</li>
        <li>Lorem</li>
      </ul>
    </>
  );
};

export default Dropdown;
// TODO ul list css et trouver comment la personnaliser pour chaque theme
