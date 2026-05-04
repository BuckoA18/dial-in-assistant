import React from "react";

const Select = ({ id, children }) => {
  return (
    <select id={id} className="">
      {children}
    </select>
  );
};

export default Select;
