import React from "react";

const RangeSlider = ({ min, max, value, setValue, currentLabel }) => {
  return (
    <div className="relative h-full w-2 rounded-2xl bg-stone-200">
      <input
        type="range"
        className="h-full w-2 rotate-180 cursor-pointer appearance-none rounded-lg bg-gray-200 [writing-mode:vertical-rl] [&::-webkit-slider-thumb]:h-8 [&::-webkit-slider-thumb]:w-8 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-stone-800"
        min={min}
        max={max}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        orient="vertical"
        aria-valuenow={currentLabel}
        aria-valuemin={min}
        aria-valuemax={max}
      />
    </div>
  );
};

export default RangeSlider;
