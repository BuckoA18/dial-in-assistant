import React from "react";
import { calcYield } from "../utils";
const EXTRACTION = [
  {
    id: 1,
    label: "Under extracted",
    value: "under",
    min: 0,
    max: 1.6,
  },
  {
    id: 2,
    label: "Ideal Range",
    value: "ideal",
    min: 1.7,
    max: 2.3,
  },
  {
    id: 3,
    label: "Over extracted",
    value: "over",
    min: 2.4,
    max: 999,
  },
];

const YieldVisualizer = ({ dose, coffeeOut }) => {
  const yieldRatio = calcYield(dose, coffeeOut);
  const currentStatus = EXTRACTION.find(
    (value) => value.min <= yieldRatio && value.max >= yieldRatio,
  );

  return (
    <div className="fade-in animate-in flex w-full max-w-md grow flex-col items-center justify-center gap-6">
      <YieldBadge type={currentStatus.value}>{currentStatus.label}</YieldBadge>
      <YieldLabel>1/{yieldRatio}</YieldLabel>
      <ExtractionStatus currentStatus={currentStatus} />
    </div>
  );
};

export default YieldVisualizer;

const YieldBadge = ({ children, type }) => {
  "rounded-full border  px-4 py-2 font-semibold text-stone-800";
  if (type === "under")
    return (
      <span className="rounded-full border-2 border-blue-500 bg-blue-300 px-4 py-2 font-semibold text-stone-800">
        {children}
      </span>
    );

  if (type === "ideal")
    return (
      <span className="rounded-full border-2 border-green-500 bg-green-300 px-4 py-2 font-semibold text-stone-800">
        {children}
      </span>
    );
  if (type === "over")
    return (
      <span className="rounded-full border-2 border-red-500 bg-red-300 px-4 py-2 font-semibold text-stone-800">
        {children}
      </span>
    );
};

const YieldLabel = ({ children }) => {
  return (
    <span className="text-4xl font-extrabold tracking-wide">{children}</span>
  );
};

const ExtractionStatus = ({ currentStatus }) => {
  console.log(currentStatus);
  return (
    <div className="flex h-2 w-full overflow-hidden rounded-full">
      {EXTRACTION.map((type) => (
        <ExtractionStatusBar
          type={type.value}
          key={type.value}
          isActive={currentStatus.value === type.value}
        />
      ))}
    </div>
  );
};

const ExtractionStatusBar = ({ type, isActive }) => {
  if (type === "under")
    return (
      <div
        className={`h-full w-1/3 transition-colors ${isActive ? " bg-blue-500" : "bg-blue-300"}`}
      ></div>
    );
  if (type === "ideal")
    return (
      <div
        className={`h-full w-1/3 transition-colors ${isActive ? " bg-green-500" : "bg-green-300"}`}
      ></div>
    );
  if (type === "over")
    return (
      <div
        className={`h-full w-1/3 transition-colors ${isActive ? "bg-red-500" : "bg-red-300"}`}
      ></div>
    );
};
