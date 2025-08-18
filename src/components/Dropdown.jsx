import React from "react";
import "../styles/utilities/_helpers.scss";

const Dropdown = () => {
  return (
    <>
      <div className="dropdown">
        <p>Products</p>
        <ul className="hidden">
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
// onClick retirer la classe hidden sur le ul pour quil apparaisse en dessous de products
