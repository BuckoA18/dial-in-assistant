import React from "react";

const Label = ({ children, forId }) => {
  return (
    <label
      className="mb-1 ml-2 text-sm font-semibold text-stone-400 sm:hidden"
      htmlFor={forId}
    >
      {children}
    </label>
  );
};

export default Label;
