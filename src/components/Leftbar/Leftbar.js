import React, { useEffect, useRef, useState } from "react";
import "./leftbar.scss";
import { FiLayers, FiMenu } from "react-icons/fi";
import { AiFillHome } from "react-icons/ai";
import { BiHistory } from "react-icons/bi";
import { AiFillSetting } from "react-icons/ai";
import Icon from "../../common/icon/Icon";
import { useLocation } from "react-router-dom";

const Leftbar = () => {
  const location = useLocation();
  const [showSidebar, setShowSidebar] = useState(false);

  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setShowSidebar(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={`sidebar ${showSidebar ? "show" : ""}`}>
       <div className={`sidebar__toggle ${showSidebar ? "hide" : ""}`} onClick={toggleSidebar} ref={sidebarRef}>
        <FiMenu />
      </div>

      <div className="sidebar__menu">
        {location.pathname === "/Dashboard" && (
          <div className="header__title">
            <Icon title="Device Manager">
              <FiLayers size={20} style={{ marginRight: 10 }} />
            </Icon>
          </div>
        )}
        <ul className="sidebar__list">
          <li>
            <Icon title="Dashboard">
              <AiFillHome size={20} style={{ marginRight: 10 }} />
            </Icon>
          </li>
          <li>
            <Icon title="Logs">
              <BiHistory size={20} style={{ marginRight: 10 }} />
            </Icon>
          </li>
          <li>
            <Icon title="Settings">
              <AiFillSetting size={20} style={{ marginRight: 10 }} />
            </Icon>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Leftbar;
