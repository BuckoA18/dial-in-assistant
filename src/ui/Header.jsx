import React from "react";
import { Link } from "react-router-dom";
import { User } from "lucide-react";

const Header = () => {
  return (
    <header className="flex h-10 w-full items-center justify-between bg-stone-600 px-3 lg:fixed lg:hidden">
      <h1 className="font-semibold">LOGO</h1>
      <Link to="profile">
        <User />
      </Link>
    </header>
  );
};

export default Header;
