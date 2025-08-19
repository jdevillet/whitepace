import React, { useState } from "react";
import "../styles/utilities/_helpers.scss";
import "../styles/components/_dropdown.scss";

const Dropdown = () => {
  const [isActive, setIsActive] = useState("");

  function handleClick() {
    setIsActive((prev) => (prev === "active" ? "" : "active"));
  }
  return (
    <>
      <div className="dropdown">
        <p onClick={handleClick}>Products</p>
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
      </div>
    </>
  );
};

export default Dropdown;
