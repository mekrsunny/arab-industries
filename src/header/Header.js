import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import "./Header.css";

function Header() {
  return (
    <div className="TopNav">
      <div className="Logo">
        <img alt="" className="Logoi" />
      </div>
      <div className="TopNavContent">
        <strong className="TopNavEach">XYZ Enterprises Pvt.ltd</strong>
        <MdKeyboardArrowDown className="TopNavEach" />
      </div>
    </div>
  );
}

export default Header;
