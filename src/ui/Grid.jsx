import React from "react";
import { twMerge } from "tailwind-merge";

const Grid = ({ children, type }) => {
  if (type === "details")
    return (
      <div className="grid grid-cols-2 gap-y-2 border-y border-stone-100 py-4 text-sm">
        {children}
      </div>
    );
  return (
    <div
      className={twMerge(
        `grid auto-rows-[100px] grid-cols-1 gap-4 p-4 sm:grid-cols-12 sm:gap-6 md:gap-10 md:p-10`,
      )}
    >
      {children}
    </div>
  );
};

export default Grid;
