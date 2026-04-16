import React from "react";
import NavItem from "./NavItem";
import {
  HomeIcon,
  Cog6ToothIcon,
  ClockIcon,
  PlusIcon,
  ListBulletIcon,
} from "@heroicons/react/24/outline";

const BottomNav = () => {
  return (
    <nav className="flex h-14 items-center justify-around">
      <NavItem to="/">
        <HomeIcon className="h-6 w-6" />
        <p className="text-xs">Home</p>
      </NavItem>

      <NavItem to="beans">
        <ListBulletIcon className="h-6 w-6" />
        <p className="text-xs">Beans</p>
      </NavItem>
      <NavItem to="dial-in">
        <PlusIcon className="h-6 w-6" />
        <p className="text-xs">Dial-In</p>
      </NavItem>
      <NavItem to="history">
        <ClockIcon className="h-6 w-6" />
        <p className="text-xs">History</p>
      </NavItem>
      <NavItem to="settings">
        <Cog6ToothIcon className="h-6 w-6" />
        <p className="text-xs">settings</p>
      </NavItem>
    </nav>
  );
};

export default BottomNav;
