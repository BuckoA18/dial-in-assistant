import React from "react";

const Button = ({ children, onClick, disabled, type = "primary", styles }) => {
  const baseStyles =
    "text-base flexitems-center w-full justify-center rounded-xl border-2  px-6 py-3 text-lg font-bold shadow-sm transition-all focus:ring-4 focus:outline-none active:scale-95 sm:w-40";
  if (type === "secondary")
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={`border-stone-400 px-6 py-3 text-lg font-bold text-stone-800 shadow-sm focus:ring-stone-400 ${baseStyles} ${styles}`}
      >
        {children}
      </button>
    );

  if (type === "icon")
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={`rounded-full border-2 border-transparent px-2 py-1 text-stone-400 transition-all focus:outline-none active:scale-95 active:bg-stone-200 active:text-stone-800 ${styles}`}
      >
        {children}
      </button>
    );

  return (
    <button
      className={`border-orange-400 bg-orange-300 px-6 py-3 text-lg font-bold text-stone-800 shadow-sm focus:ring-orange-400 ${baseStyles} ${styles}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
