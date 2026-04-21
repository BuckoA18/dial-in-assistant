import React from "react";

const BackButton = ({ children, onClick }) => {
  return (
    <button
      className="absolute right-0 rounded-full bg-gray-300 p-2 shadow-sm transition-all active:scale-95"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default BackButton;
