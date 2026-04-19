import React, { Children } from "react";

const Select = ({ children, label }) => {
  return (
    <>
      <label htmlFor="label" className="block text-sm font-semibold">
        {label}
      </label>
      <select id={label} className="rounded-md bg-white p-2">
        {children}
      </select>
    </>
  );
};

export default Select;
