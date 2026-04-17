import React, { Children } from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex flex-col items-center rounded-lg transition-all duration-100 ease-in active:scale-95 ${isActive ? " font-semibold text-gray-800 lg:bg-gray-200" : " text-gray-400"} w-full py-1 hover:bg-gray-200 hover:text-gray-800 lg:w-full lg:p-3`
      }
    >
      {children}
    </NavLink>
  );
};

export default NavItem;
