import React from "react";

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
