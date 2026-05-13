import React from "react";

const TasteSlider = ({ sliderLabels }) => {
  return (
    <div>
      <div className="flex justify-between">
        {sliderLabels.map((label) => {
          return (
            <p
              className="text-xs font-semibold text-stone-400 uppercase"
              key={label}
            >
              {label}
            </p>
          );
        })}
      </div>
      <input type="range" className="w-full" />
    </div>
  );
};

export default TasteSlider;
