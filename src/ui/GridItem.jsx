import React from "react";
import { twMerge } from "tailwind-merge";

const GridItem = ({ children, colSpan, rowSpan }) => {
  const colClass = {
    1: "sm:col-span-1",
    2: "sm:col-span-2",
    4: "sm:col-span-4",
    5: "sm:col-span-5",
    6: "sm:col-span-6",
    7: "sm:col-span-7",
    8: "sm:col-span-8",
    9: "sm:col-span-9",
    3: "sm:col-span-3",
    10: "sm:col-span-10",
    11: "sm:col-span-11",
    12: "sm:col-span-12",
  };

  const rowClass = {
    1: "row-span-1",
    2: "row-span-2",
    3: "row-span-3",
    4: "row-span-4",
    5: "row-span-5",
    6: "row-span-6",
  };

  const cols = colSpan ? colClass[colSpan] : "col-span-12";
  const rows = rowSpan ? rowClass[rowSpan] : "";
  return <div className={twMerge(cols, rows)}>{children}</div>;
};

export default GridItem;
