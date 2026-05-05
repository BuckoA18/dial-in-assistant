import React from "react";

const Button = ({ children, onClick, disabled }) => {
  return (
    <button
      className="text-md flex w-full items-center justify-center rounded-full border-2 border-orange-400 bg-orange-300 px-6 py-3 text-lg font-bold text-stone-800 shadow-md transition-all focus:ring-4 focus:ring-orange-400 focus:outline-none active:scale-95"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
