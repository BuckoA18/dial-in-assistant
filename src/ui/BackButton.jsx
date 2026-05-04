import React from "react";

const BackButton = ({ children, onClick }) => {
  return (
    <button
      className="absolute right-0 rounded-full p-2 transition-all active:scale-95"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default BackButton;
