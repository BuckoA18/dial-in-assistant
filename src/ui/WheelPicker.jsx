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
        <div className="pointer-events-none absolute left-1/2 z-10 h-18 w-14 -translate-x-1/2 rounded-lg border-4 border-stone-600"></div>
        <div
          onScroll={handleScroll}
          className={`no-scrollbar flex h-28 w-full snap-x snap-mandatory items-center gap-10 overflow-hidden overflow-x-auto scroll-smooth px-[152px]`}
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
        className={`h-6 rounded-full transition-all ${isActive ? "h-8 w-1 bg-stone-600" : "w-0.5 bg-stone-300"}`}
      ></span>
      <p
        className={`transition-all ${isActive ? " font-semibold text-stone-600" : "text-xs text-stone-300"}`}
      >
        {value}
      </p>
    </div>
  );
};

export default WheelPicker;
