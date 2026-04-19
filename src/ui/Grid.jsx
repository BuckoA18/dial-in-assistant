import React from "react";
import { twMerge } from "tailwind-merge";

const Grid = ({ children }) => {
  return (
    <div
      className={twMerge(
        "grid auto-rows-[150px] grid-cols-1 gap-4 p-4 sm:grid-cols-12 sm:gap-6 md:gap-10 md:p-10",
      )}
    >
      {children}
    </div>
  );
};

export default Grid;
