import React from "react";
import "../styles/components/_button.scss";

const Button = ({ text, classes, styleParam }) => {
  return (
    <input
      type="button"
      className={classes}
      value={text}
      style={styleParam}
    ></input>
  );
};

export default Button;
