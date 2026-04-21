import React, { Children } from "react";
import Label from "./Label";

const Select = ({ children, label, id }) => {
  return (
    <>
      <Label id={id} label={label}>
        <select
          id={id}
          className="mt-1 rounded-2xl bg-white px-2 py-2 shadow-sm outline-none focus:ring-2 focus:ring-purple-700 focus:ring-offset-2"
        >
          {children}
        </select>
      </Label>
    </>
  );
};

export default Select;
