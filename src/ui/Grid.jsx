import React from "react";
import { twMerge } from "tailwind-merge";

const Grid = ({ children }) => {
  return (
    <div
      className={twMerge(
        "grid auto-rows-[150px] grid-cols-1 gap-2 p-2 sm:grid-cols-12",
      )}
    >
      {children}
    </div>
  );
};

export default Grid;
