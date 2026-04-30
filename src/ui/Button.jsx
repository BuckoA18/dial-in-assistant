import React from "react";

const Button = ({ children, onClick, disabled }) => {
  return (
    <button
      className="text-md flex w-full items-center justify-center rounded-xl bg-stone-300 px-6 py-2 font-bold text-gray-800 shadow-md transition-all focus:ring-4 focus:ring-stone-800 focus:outline-none active:scale-95"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
