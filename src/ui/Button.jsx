import React from "react";

const Button = ({ children, onClick, disabled }) => {
  return (
    <button
      className="text-md flex w-full items-center justify-center rounded-xl bg-gray-300 px-6 py-2 font-bold text-gray-800 shadow-md transition-all active:scale-95"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
