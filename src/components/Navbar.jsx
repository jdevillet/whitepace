import React, { useEffect, useState } from "react";
import Dropdown from "./Dropdown";
import logo from "../assets/img/logos/whitepace.svg";
import Button from "./Button";
import "../styles/components/_navbar.scss";
import { FaChevronDown } from "react-icons/fa";
import Hamburger from "./Hamburger";
import MobileDropdown from "./MobileDropdown";

const menuItems = {
  products: ["Task Management", "Resource Allocation", "Time Tracking"],
  solutions: ["Large Enterprises", "Small Businesses", "Freelancers"],
  ressources: ["Documentation", "Webinars", "Support"],
  pricing: ["Monthly Plans", "Annual Plans", "Free Trial"],
};

const Navbar = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  useEffect(() => {
    if (hamburgerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [hamburgerOpen]);
  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo of whitepace" />
      </div>

      <ul className="dropdown">
        {Object.entries(menuItems).map(([key, items]) => (
          <li key={key}>
            <Dropdown
              title={key.charAt(0).toUpperCase() + key.slice(1)}
              items={items}
              icon={<FaChevronDown />}
            />
          </li>
        ))}
      </ul>

      <div className="nav-right">
        <div className="nav-buttons">
          <Button
            classes="default-btn btn-var-1"
            text="Login"
            styleParam={{}}
          />
          <Button
            classes="default-btn btn-var-2"
            text="Try Whitepace free"
            styleParam={{}}
          />
        </div>

        <div className="hamburger-container" onClick={toggleHamburger}>
          <Hamburger isOpen={hamburgerOpen} />
        </div>
      </div>

      <div
        className={`mobile-dropdown-container ${hamburgerOpen ? "active" : ""}`}
      >
        <ul className="mobile-dropdown">
          {Object.entries(menuItems).map(([key, items]) => (
            <MobileDropdown
              key={key}
              id={key}
              title={key.charAt(0).toUpperCase() + key.slice(1)}
              items={items}
              icon={<FaChevronDown />}
            />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
