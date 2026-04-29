import React from "react";

const Label = ({ children, id }) => {
  return (
    <label
      className="flex flex-col gap-1 text-sm font-semibold text-stone-400"
      htmlFor={id}
    >
      {children}
    </label>
  );
};

export default Label;
