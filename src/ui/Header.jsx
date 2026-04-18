import React from "react";
import { Link } from "react-router-dom";
import { User } from "lucide-react";

const Header = () => {
  return (
    <header className="flex h-14 w-full items-center justify-between border-b-2 border-gray-200 bg-white px-3 md:fixed md:top-0 md:left-0">
      <h1 className="font-semibold">LOGO</h1>
      <Link to="profile">
        <User />
      </Link>
    </header>
  );
};

export default Header;
