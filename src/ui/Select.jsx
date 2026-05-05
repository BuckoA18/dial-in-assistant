import React from "react";

const Select = ({ id, children }) => {
  return (
    <select
      id={id}
      className="w-full rounded-full border border-stone-200 px-4 py-2 shadow-sm focus:ring-3 focus:ring-orange-600 focus:ring-offset-2 focus:outline-none"
    >
      {children}
    </select>
  );
};

export default Select;
