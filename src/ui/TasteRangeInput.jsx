import React, { useState } from "react";
import { Slider } from "@radix-ui/react-slider";
import RangeSlider from "./RangeSlider";
import { calcRange } from "../utils";

const tasteRange = calcRange(0, 10, 1);

const TasteRangeInput = () => {
  //Get current value from slider
  const [value, setValue] = useState(0);

  // activate index in range based on current value from slide / 10
  const activeIndex = Math.round(value / 10);
  console.log("Active Index: ", activeIndex);

  return (
    <div className="flex h-full w-full items-center">
      <div className="col flex h-98 w-1/2 flex-col-reverse items-center justify-center gap-6">
        {tasteRange.map((value) => (
          <TasteOption
            key={value}
            isActive={value === activeIndex}
            label={value}
          />
        ))}
      </div>
      <div className="flex h-98 w-1/2 items-center justify-center">
        <RangeSlider setValue={setValue} value={value} />
      </div>
    </div>
  );
};

export default TasteRangeInput;

const TasteOption = ({ isActive, label }) => {
  return (
    <div className="flex items-center gap-2">
      <p className="text-xs font-semibold text-stone-400">{label}</p>
      <span
        className={`h-0.5 w-6 rounded-2xl bg-stone-400 transition-all ${isActive && "h-1 w-20 bg-stone-800"}`}
      ></span>
    </div>
  );
};
