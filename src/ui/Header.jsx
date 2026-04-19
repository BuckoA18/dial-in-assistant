import React from "react";
import { Link } from "react-router-dom";
import { User } from "lucide-react";

const Header = () => {
  return (
    <header className="z-50 flex h-10 w-full items-center justify-between bg-white px-3 sm:h-14 lg:fixed">
      <h1 className="font-semibold">LOGO</h1>
      <Link to="profile">
        <User />
      </Link>
    </header>
  );
};

export default Header;
