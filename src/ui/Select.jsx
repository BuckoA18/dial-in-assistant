import React from "react";

const Select = ({ id, children }) => {
  return (
    <select
      id={id}
      className="h-12 w-full rounded-xl border-2 border-stone-200 px-6 text-lg font-bold shadow-sm transition-all focus:border-orange-400 focus:ring-4 focus:ring-orange-400 focus:outline-none"
    >
      {children}
    </select>
  );
};

export default Select;
