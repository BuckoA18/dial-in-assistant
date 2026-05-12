import React from "react";

import Label from "./Label";

const Input = ({ value, isDisabled, onChange, placeholder, id }) => {
  return (
    <input
      placeholder={placeholder}
      type="number"
      id={id}
      className="h-12 w-full rounded-xl border-2 border-stone-200 px-6 text-lg font-bold shadow-sm transition-all focus:border-orange-400 focus:ring-4 focus:ring-orange-400 focus:outline-none"
      value={value}
      onChange={onChange}
      disabled={isDisabled}
    />
  );
};

export default Input;
