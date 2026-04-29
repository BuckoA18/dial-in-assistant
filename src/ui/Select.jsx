import React from "react";

const Select = ({ id, children }) => {
  return (
    <select
      id={id}
      className="border-b-3 border-stone-300 p-2 text-xl font-semibold text-stone-400"
    >
      {children}
    </select>
  );
};

export default Select;
