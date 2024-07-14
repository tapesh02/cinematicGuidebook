// @ts-nocheck
import * as React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logos/TextLogo.svg";
import { FaHome, FaTv } from "react-icons/fa";
import { MdLiveTv, MdOutlineSettings } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";

export default function MobileNavBar() {
  return (
    <>
      <NavLink className="logo-link">
        <img src={logo} alt="logo" />
      </NavLink>
      <div className="mobile-menu">
        {[<FaHome size={30}/>, <FaTv size={30}/>, <AiOutlineSearch size={30} />, <MdLiveTv size={30}/>, <MdOutlineSettings size={30} />].map((menu) => (
          <React.Fragment key={menu}>
            <NavLink className="menu-icon">{menu}</NavLink>
          </React.Fragment>
        ))}
      </div>
    </>
  );
}
