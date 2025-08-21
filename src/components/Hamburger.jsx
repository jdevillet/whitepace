import React from "react";
import "../styles/components/_hamburger.scss";

const Hamburger = ({ isOpen }) => {
  return (
    <>
      <div className="hamburger">
        <div
          className="burger burger1"
          style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0)" }}
        />
        <div
          className="burger burger2"
          style={{ transform: isOpen ? "translateX(100px)" : "translateX(0)" }}
        />
        <div
          className="burger burger3"
          style={{ transform: isOpen ? "rotate(-45deg)" : "rotate(0)" }}
        />
      </div>
    </>
  );
};

export default Hamburger;
