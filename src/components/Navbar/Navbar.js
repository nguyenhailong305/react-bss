import React from "react";
import { FaUserCircle } from "react-icons/fa";
import './navbar.scss'

const Navbar = () => {
  return (
    <div className="navbar__container">
      <div className="user">
        <FaUserCircle size={20}/>
        <span className="navbar__text">Welcome John</span>
      </div>
    </div>
  );
};

export default Navbar;