import React from "react";

const Input = ({ type, id, placeholder, value, isDisabled, onChange }) => {
  if (type === "grinder")
    return (
      <input
        type="number"
        id={id}
        className="w-full rounded-xs border-b-3 border-stone-800 pl-1 text-center text-6xl text-stone-800 transition-colors focus:border-none focus:ring-4 focus:outline-none"
        value={value}
        disabled={true}
        aria-live="polite"
      />
    );
  return (
    <input
      type={type}
      id={id}
      className="w-full rounded-xs border-b-3 border-stone-800 pl-2 text-6xl text-stone-800 focus:border-none focus:ring-4 focus:outline-none"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={isDisabled}
    />
  );
};

export default Input;
