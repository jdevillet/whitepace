import React from "react";
import Dropdown from "./Dropdown";
import logo from "../assets/img/logos/whitepace.svg";
import Button from "./Button";
import "../styles/components/_navbar.scss";
import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo of whitepace" />
      </div>
      <ul className="dropdown">
        <li>
          <Dropdown dropdownText="Products" icon={<FaChevronDown />} />
        </li>
        <li>
          <Dropdown dropdownText="Solutions" icon={<FaChevronDown />} />
        </li>
        <li>
          <Dropdown dropdownText="Ressources" icon={<FaChevronDown />} />
        </li>
        <li>
          <Dropdown dropdownText="Pricing" icon={<FaChevronDown />} />
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
