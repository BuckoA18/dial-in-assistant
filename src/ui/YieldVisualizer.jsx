import React from "react";
import { calcYield } from "../utils";
const EXTRACTION = [
  {
    id: 1,
    label: "Ristretto / Under",
    value: "under",
    min: 0,
    max: 1.6,
    color: "bg-blue-300 border-blue-400",
  },
  {
    id: 2,
    label: "Ideal Range",
    value: "ideal",
    min: 1.7,
    max: 2.3,
    color: "bg-green-300 border-green-400",
  },
  {
    id: 3,
    label: "Lungo / Over",
    value: "over",
    min: 2.4,
    max: 999,
    color: "bg-red-300 border-red-400",
  },
];

const YieldVisualizer = ({ dose, coffeeOut }) => {
  const yieldRatio = calcYield(dose, coffeeOut);
  const extraction = EXTRACTION.find(
    (value) => value.min <= yieldRatio && value.max >= yieldRatio,
  );

  console.log(extraction);

  return (
    <div className="fade-in animate-in flex w-full max-w-md grow flex-col items-center justify-center gap-4">
      <PillBadge color={extraction.color}>{extraction.label}</PillBadge>
      <YieldLabel>1/{yieldRatio}</YieldLabel>
      <ExtractionStatus />
    </div>
  );
};

export default YieldVisualizer;

const PillBadge = ({ children, color }) => {
  const baseStyles =
    "rounded-full border  px-4 py-2 font-semibold text-stone-800";
  return <span className={`${baseStyles} ${color}`}>{children}</span>;
};

const YieldLabel = ({ children }) => {
  return (
    <span className="text-4xl font-extrabold tracking-wide">{children}</span>
  );
};

const ExtractionStatus = () => {
  return (
    <div className="flex h-2 w-full overflow-hidden rounded-full">
      <div className="h-full w-1/3 bg-blue-300"></div>
      <div className="h-full w-1/3 bg-green-300"></div>
      <div className="h-full w-1/3 bg-red-300"></div>
    </div>
  );
};
