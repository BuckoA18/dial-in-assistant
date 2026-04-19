import React, { useState } from "react";
import NavItem from "./NavItem";
import { Home, History, Plus, Settings, List } from "lucide-react";
import Nav from "./Nav";

const Aside = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <aside
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className={` ${isOpen && "w-40"} hidden h-full w-14 flex-col items-center bg-white px-1 transition-all ease-in-out lg:fixed lg:top-14 lg:flex`}
    >
      <Nav type="aside" isOpen={isOpen} />
    </aside>
  );
};

export default Aside;
