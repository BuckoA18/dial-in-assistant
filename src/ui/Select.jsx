import React, { Children } from "react";
import Label from "./Label";

const Select = ({ children, label, id }) => {
  return (
    <>
      <Label id={id} label={label}>
        <select
          id={id}
          className="mt-1 rounded-2xl border border-stone-200 px-2 py-2 shadow-xs outline-none focus:ring-2 focus:ring-stone-800 focus:ring-offset-2"
        >
          {children}
        </select>
      </Label>
    </>
  );
};

export default Select;
