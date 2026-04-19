import React from "react";

const Input = ({ label, type }) => {
  return (
    <>
      <label className="text-sm font-semibold" htmlFor={label}>
        {label}
      </label>
      <input type={type} id={label} className="rounded-md bg-white p-2" />
    </>
  );
};

export default Input;
