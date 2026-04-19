import Beans from "../pages/Beans";
import NavItem from "./NavItem";

import { NAV_LINKS } from "../config";

const Nav = ({ type = "bottom", isOpen = true, iconSize }) => {
  if (type === "bottom")
    return (
      <nav
        className={`fixed bottom-0 z-50 flex h-14 w-full items-center justify-center rounded rounded-t-lg backdrop-blur-md sm:bottom-6 sm:left-1/2 sm:max-w-96 sm:translate-x-[-50%] sm:rounded-2xl sm:px-4 lg:hidden`}
      >
        {NAV_LINKS.map((item) => (
          <NavItem to={item.to} key={item.to}>
            <item.icon size={iconSize} />
            <p
              className={`${!isOpen && "hidden"} ${type === "bottom" && "text-xs"}`}
            >
              {item.label}
            </p>
          </NavItem>
        ))}
      </nav>
    );

  if (type === "aside")
    return (
      <nav
        className={`mt-1 flex w-full flex-col gap-1 ${isOpen ? "items-start justify-center" : "items-center"}`}
      >
        {NAV_LINKS.filter((item) => item.label !== "Dial-In").map((item) => (
          <NavItem to={item.to} key={item.to}>
            <span className="flex items-center gap-2">
              <item.icon size={iconSize} />
              {isOpen && <p className="text-sm">{item.label}</p>}
            </span>
          </NavItem>
        ))}
      </nav>
    );
};

export default Nav;
