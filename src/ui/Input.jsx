import React from "react";
import Label from "./Label";

const Input = ({ label, type, id }) => {
  return (
    <>
      <Label id={id} label={label}>
        <input
          type={type}
          id={id}
          className="rounded-md bg-white p-2 shadow-sm"
        />
      </Label>
    </>
  );
};

export default Input;
