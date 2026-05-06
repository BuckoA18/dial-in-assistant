import React, { useEffect, useRef, useState } from "react";
import { calcRange } from "./../utils";
import { ArrowRight } from "lucide-react";
import Input from "./Input";
import Label from "./Label";

const WheelPicker = ({ min, max, step = 1, lastClickValue = 25 }) => {
  const [currentValue, setCurrentValue] = useState(lastClickValue);

  const scrollRef = useRef(null);

  const range = calcRange(min, max, step);
  const optionWidth = 48;

  useEffect(() => {
    const initialScroll = (lastClickValue - min) * optionWidth;

    if (scrollRef.current) {
      scrollRef.current.scrollLeft = initialScroll;
    }
  }, [min]);

  const handleScroll = (e) => {
    const container = e.target;
    const scrollLeft = container.scrollLeft;
    console.log(scrollLeft);
    const index = Math.round(scrollLeft / optionWidth) + min;

    if (index !== currentValue && index >= min && index <= max) {
      setCurrentValue(index);
    }
  };

  return (
    <div className="mt-2 flex flex-col items-center mask-x-from-72">
      <span className="text-4xl font-bold tracking-wide">{currentValue}</span>
      <div className="relative flex w-76 items-center">
        <div className="pointer-events-none absolute left-1/2 z-10 h-20 w-12 -translate-x-1/2 rounded-sm border-3 border-stone-600 bg-transparent shadow-sm"></div>
        <div
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={currentValue}
          ref={scrollRef}
          tabIndex={0}
          onScroll={handleScroll}
          role="slider"
          className="no-scrollbar flex h-28 w-full snap-x snap-mandatory items-center gap-2 overflow-x-auto scroll-smooth px-[151px] focus:rounded-xs focus:ring-2 focus:ring-offset-2 focus:outline-none"
        >
          {range.map((value) => (
            <WheelPickerOption
              key={value}
              isActive={value === Number(currentValue)}
              value={value}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const WheelPickerOption = ({ isActive }) => {
  return (
    <div className="flex min-w-10 snap-center flex-col items-center">
      <span
        className={`h-8 w-0.5 rounded-full transition-all ${
          isActive ? "h-12 w-1 bg-stone-800" : " bg-stone-300"
        }`}
      ></span>
    </div>
  );
};

export default WheelPicker;
