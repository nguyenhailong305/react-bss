import React from "react";
import classNames from "classnames";
import "./button.scss";

const Button = ({ children, className, small, large  , smaller, ...props }) => {
  const classes = classNames("button", className, {
    "button--small": small,
    "button--large" : large ,
    "button--smaller" : smaller 
  });

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;