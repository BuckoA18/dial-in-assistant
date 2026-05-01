import React, { useState } from "react";
import { Slider } from "@radix-ui/react-slider";
import RangeSlider from "./RangeSlider";
import { calcRange } from "../utils";

const tasteOptions = [
  { id: 1, label: "Way too bitter", adjustment: "Grind much coarser" },
  { id: 2, label: "Very bitter", adjustment: "Grind coarser" },
  { id: 3, label: "Bitter", adjustment: "Grind slightly coarser" },
  { id: 4, label: "A bit bitter", adjustment: "Decrease yield / Stop earlier" },
  { id: 5, label: "Bittersweet", adjustment: "Almost there! Minor tweak" },
  { id: 6, label: "Perfectly balanced", adjustment: "Don't change a thing" },
  { id: 7, label: "Sweet & tangy", adjustment: "Great for light roasts" },
  { id: 8, label: "A bit sour", adjustment: "Increase yield / Run longer" },
  { id: 9, label: "Sour", adjustment: "Grind finer" },
  { id: 10, label: "Very sour", adjustment: "Grind much finer" },
];

const TasteRangeInput = () => {
  //Get current value from slider
  const [value, setValue] = useState(5);
  console.log(value);

  const handleClick = (id) => {
    setValue(id);
  };

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="col flex h-98 grow flex-col-reverse items-center justify-center gap-6">
        {tasteOptions.map((option) => (
          <TasteOption
            key={option.id}
            isActive={option.id === value}
            label={option.label}
            id={option.id}
            onClick={handleClick}
          />
        ))}
      </div>
      <div className="flex h-98 w-20 items-center justify-center">
        <RangeSlider setValue={setValue} value={value} min={1} max={10} />
      </div>
    </div>
  );
};

export default TasteRangeInput;

const TasteOption = ({ isActive, label, id, onClick }) => {
  return (
    <p
      onClick={() => onClick(id)}
      className={`text-center font-semibold text-stone-400 transition-all ${isActive ? "text-2xl text-stone-800" : "text-xs"}`}
    >
      {label}
    </p>
  );
};
