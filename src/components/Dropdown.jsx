import React, { useState } from "react";
import "../styles/utilities/_helpers.scss";
import "../styles/components/_dropdown.scss";

const Dropdown = ({ title, icon, items = [] }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className="dropdown-wrapper"
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <p className="dropdown__link">
        {title}
        <span className={`link-icon ${isActive ? "rotate" : ""}`}>{icon}</span>
      </p>

      <ul className={`dropdown__menu ${isActive ? "active" : ""}`}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
