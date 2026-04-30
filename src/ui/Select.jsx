import React from "react";

const Select = ({ id, children }) => {
  return (
    <select
      id={id}
      className="border-b-3 border-stone-800 p-2 text-xl font-semibold text-stone-800 focus:rounded-xs focus:border-none focus:ring-4 focus:ring-stone-800 focus:ring-offset-2 focus:outline-none"
    >
      {children}
    </select>
  );
};

export default Select;
