import React, { Children } from "react";
import { Link } from "react-router-dom";

const LinkButton = ({ children, onClick, to }) => {
  return (
    <Link to={to} onClick={onClick}>
      {children}
    </Link>
  );
};

export default LinkButton;
