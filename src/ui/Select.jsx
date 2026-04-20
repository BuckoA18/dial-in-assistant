import React, { Children } from "react";
import Label from "./Label";

const Select = ({ children, label, id }) => {
  return (
    <>
      <Label id={id} label={label}>
        <select id={id} className="rounded-md bg-white p-2">
          {children}
        </select>
      </Label>
    </>
  );
};

export default Select;
