import React from "react";
import "./input.scss";

const Input = ({ type, placeholder, size }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`input ${size ? `input--${size}` : ""}`}
    />
  );
};

export default Input;