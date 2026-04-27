import React, { useState } from "react";

const tasteSpectrum = [
  {
    value: 0,
    label: "Bitter",
    color: "amber-950",
    description: "Dark, charred, or herbal notes",
  },
  {
    value: 25,
    label: "Bittersweet",
    color: "amber-800",
    description: "Dark chocolate or coffee-like",
  },
  {
    value: 50,
    label: "Sweet",
    color: "amber-600",
    description: "Sugary, ripe, and balanced",
  },
  {
    value: 75,
    label: "Sweet & Sour",
    color: "amber-400",
    description: "Fruity or candy-like",
  },
  {
    value: 100,
    label: "Acidic",
    color: "amber-200",
    description: "Bright, tart, and citrusy",
  },
];

const RangeInput = ({ min = 0, max = 100, isDisabled, id, label }) => {
  const [taste, setTaste] = useState("Sweet");
  return (
    <div className="flex w-full">
      <span className="relative h-1 w-full rounded-2xl">
        <input
          type="range"
          min={min}
          max={max}
          className="absolute w-full translate-y-[-50%] accent-amber-500"
        />
      </span>
    </div>
  );
};

export default RangeInput;
