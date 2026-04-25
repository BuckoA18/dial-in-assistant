import React from "react";
import Label from "./Label";

const Input = ({ label, type, id, placeholder }) => {
  return (
    <>
      <Label id={id} label={label}>
        <input
          type={type}
          id={id}
          className="w-20 border-b-3 border-stone-300 pl-1 text-right text-6xl transition-colors focus:border-stone-800 focus:text-stone-800 focus:outline-none"
          placeholder={placeholder}
        />
      </Label>
    </>
  );
};

export default Input;
