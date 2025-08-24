import React, { useState } from "react";
import "../styles/utilities/_helpers.scss";
import "../styles/components/_dropdown.scss";

const Dropdown = ({ title, icon, items = [] }) => {
  const [isActive, setIsActive] = useState("");

  function handleClick() {
    setIsActive((prev) => (prev === "active" ? "" : "active"));
  }
  return (
    <>
      <p className="dropdown__link" onClick={handleClick}>
        {title}
        <span className={`link-icon ${isActive ? "rotate" : ""}`}>{icon}</span>
      </p>
      <ul className={`dropdown__menu ${isActive ? "active" : "hidden"}`}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default Dropdown;
