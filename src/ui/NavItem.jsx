import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ children, to }) => {
  return (
    <div>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `flex flex-col items-center ${isActive ? "text-gray-800" : "text-gray-500"}`
        }
      >
        {children}
      </NavLink>
    </div>
  );
};

export default NavItem;
