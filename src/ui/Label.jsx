import React from "react";

const Label = ({ children, label, id }) => {
  return (
    <label
      className="flex flex-col items-center gap-1 text-sm font-semibold text-stone-400 focus:text-stone-800"
      htmlFor={id}
    >
      {label}
      {children}
    </label>
  );
};

export default Label;
