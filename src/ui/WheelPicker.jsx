import React from "react";
import { useState } from "react";
import { calcRange } from "./../utils";

const WheelPicker = ({ min = 1, max = 500, step = 1 }) => {
  const [currentValue, setCurrentvalue] = useState(1);
  const range = calcRange(min, max, step);
  // total item w + gap (40px + 40px)
  const optionWidth = 80;
  const xPadding = 152;

  const handleScroll = (e) => {
    const container = e.target;
    const scrollLeft = container.scrollLeft;

    const index = Math.round(scrollLeft / optionWidth + min);
    setCurrentvalue(index);
  };

  return (
    <div className="flex flex-col items-center">
      <div
        className="relative flex h-40 w-76 items-center"
        onScroll={handleScroll}
      >
        <div className="pointer-events-none absolute left-1/2 z-10 h-18 w-14 -translate-x-1/2 rounded-lg border-2 border-gray-800"></div>
        <div
          onScroll={handleScroll}
          className={`flex h-28 w-full snap-x snap-mandatory items-center gap-10 overflow-hidden overflow-x-auto scroll-smooth px-[${xPadding}px]`}
        >
          {range.map((value) => (
            <WheelPickerOption
              value={value}
              key={value}
              isActive={value === currentValue}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const WheelPickerOption = ({ value, isActive }) => {
  return (
    <div className="flex min-w-10 snap-center flex-col items-center">
      <span
        className={`h-6 w-0.5 ${isActive ? "h-8 w-0.5 bg-gray-800" : "bg-gray-300"}`}
      ></span>
      <p
        className={`text-xs ${isActive ? "font-semibold text-gray-800" : "text-gray-300"}`}
      >
        {value}
      </p>
    </div>
  );
};

export default WheelPicker;
