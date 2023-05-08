import { NavLink } from "react-router-dom";
import "./icon.scss";
import React from "react";

const Icon = ({ children, title, isActive }) => {
  const iconClassName = isActive ? "active" : "";
  return (
    <div className="title__sidebar">
      <span className="title__text">
        <NavLink
          to={`/${title}`}
          className={`title__link ${iconClassName}`}
        >
          {React.cloneElement(children, {
            className: isActive ? "active" : "",
          })}
          {title}
        </NavLink>
      </span>
    </div>
  );
};

export default Icon;
