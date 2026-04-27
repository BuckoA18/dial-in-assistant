import React from "react";
import Label from "./Label";

const Input = ({ label, type, id, placeholder, value, isDisabled }) => {
  return (
    <>
      <Label id={id} label={label}>
        <input
          type={type}
          id={id}
          className="w-20 border-b-3 border-stone-300 pl-1 text-center text-6xl transition-colors focus:border-stone-800 focus:text-stone-800 focus:outline-none"
          placeholder={placeholder}
          value={value}
          disabled={isDisabled}
        />
      </Label>
    </>
  );
};

export default Input;
