import React, { Children } from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex flex-col items-center rounded-lg transition-all duration-100 ease-in active:scale-95 ${isActive ? " font-semibold text-stone-900 lg:bg-stone-200" : " text-stone-400"} w-full py-1 lg:w-full lg:p-3`
      }
    >
      {children}
    </NavLink>
  );
};

export default NavItem;
