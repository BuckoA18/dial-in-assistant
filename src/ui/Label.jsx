import React from "react";

const Label = ({ children, label, id }) => {
  return (
    <label className="flex flex-col gap-1 text-sm font-semibold" htmlFor={id}>
      {label}
      {children}
    </label>
  );
};

export default Label;
