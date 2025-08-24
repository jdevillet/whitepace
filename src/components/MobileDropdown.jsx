// File: MobileDropdown.js
import React from "react";
import "../styles/utilities/_helpers.scss";
import "../styles//components/_mobile-dropdown.scss";

const MobileDropdown = ({ id, title, items = [], icon }) => {
  return (
    <li className="dropdown__item">
      <input
        type="checkbox"
        id={id}
        value={title}
        className="dropdown-toggle"
      />{" "}
      <span className="link-icon">{icon}</span>
      <label
        htmlFor={id}
        className="site-nav__link dropdown-action"
        aria-label={`Toggle ${title} Dropdown`}
      >
        <span className="dropdown-toggle-text">{title}</span>
      </label>
      <ul className="dropdown">
        {items.map((item, index) => (
          <li key={index} className="dropdown__item">
            <a href="#" className="site-nav__link">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default MobileDropdown;
// TODO mobile nav
