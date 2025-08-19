import React from "react";
import Dropdown from "./Dropdown";
import logo from "../assets/img/logos/whitepace.svg";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo of whitepace" />
      </div>
      <ul>
        <li>
          <Dropdown />
        </li>
      </ul>
      <div className="nav-buttons">
        <Button classes="default-btn btn-var-1" text="Login" styleParam={{}} />
        <Button
          classes="default-btn btn-var-2"
          text="Try Whitepace free"
          styleParam={{}}
        />
      </div>
    </div>
  );
};

export default Navbar;
