import React from "react";

const Label = ({ children, id }) => {
  return (
    <label
      className="mr-auto mb-2 text-sm font-semibold text-stone-800"
      htmlFor={id}
    >
      {children}
    </label>
  );
};

export default Label;
