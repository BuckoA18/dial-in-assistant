import React from "react";
import Label from "./Label";

const Input = ({ label, type, id }) => {
  return (
    <>
      <Label id={id} label={label}>
        <input
          type={type}
          id={id}
          className="rounded-md border border-stone-200 p-2 shadow-xs"
        />
      </Label>
    </>
  );
};

export default Input;
