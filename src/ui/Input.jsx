import React from "react";

const Input = ({ type, id, placeholder, value, isDisabled, onChange }) => {
  if (type === "grinder")
    return (
      <input
        type="number"
        id={id}
        className="w-full rounded-full border border-stone-300 px-4 py-2 text-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:outline-none"
        value={value}
        disabled={true}
        aria-live="polite"
      />
    );
  return (
    <input
      type={type}
      id={id}
      className="w-full rounded-full border border-stone-300 px-4 py-2 text-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:outline-none"
      value={value}
      onChange={onChange}
      disabled={isDisabled}
    />
  );
};

export default Input;
