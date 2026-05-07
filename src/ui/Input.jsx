import React from "react";

import Label from "./Label";

const Input = ({ type, value, isDisabled, onChange, placeholder, id }) => {
  if (type === "shot")
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
  return (
    <input
      type={type}
      id={id}
      className="w-full rounded-full border border-stone-300 px-4 py-2 shadow-sm focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:outline-none"
      value={value}
      onChange={onChange}
      disabled={isDisabled}
    />
  );
};

export default Input;
