import React, { useEffect, useRef, useState } from "react";
import { calcRange } from "./../utils";
import { ArrowRight } from "lucide-react";
import Input from "./Input";
import Label from "./Label";

const WheelPicker = ({ min = 1, max = 500, step = 1 }) => {
  const [currentValue, setCurrentValue] = useState(min);
  const [isScrolledByKeys, setIsScrolledByKeys] = useState(false);
  const scrollRef = useRef(null);

  const range = calcRange(min, max, step);
  const optionWidth = 48;

  useEffect(() => {
    if (isScrolledByKeys && scrollRef.current) {
      const target = (currentValue - min) * optionWidth;
      scrollRef.current.scrollTo({ left: target, behavior: "smooth" });

      const timeout = setTimeout(() => {
        setIsScrolledByKeys(false);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentValue, min, isScrolledByKeys]);

  const handleScroll = (e) => {
    if (isScrolledByKeys) return;

    const container = e.target;
    const scrollLeft = container.scrollLeft;
    const index = Math.round(scrollLeft / optionWidth) + min;

    if (index !== currentValue && index >= min && index <= max) {
      setCurrentValue(index);
    }
  };

  const handleKeyDown = (e) => {
    if (e.code === "ArrowRight") {
      e.preventDefault(); // Stop the whole page from scrolling
      if (currentValue < max) {
        setIsScrolledByKeys(true);
        setCurrentValue((prev) => prev + step);
      }
    }

    if (e.code === "ArrowLeft") {
      e.preventDefault();
      if (currentValue > min) {
        setIsScrolledByKeys(true);
        setCurrentValue((prev) => prev - step);
      }
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative flex w-76 items-center">
        <div className="pointer-events-none absolute left-1/2 z-10 h-20 w-12 -translate-x-1/2 rounded-sm border-3 border-stone-600 bg-transparent shadow-sm focus:ring-orange-600"></div>
        <div
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={currentValue}
          ref={scrollRef}
          tabIndex={0}
          onScroll={handleScroll}
          onKeyDown={handleKeyDown}
          role="slider"
          className="no-scrollbar flex h-28 w-full snap-x snap-mandatory items-center gap-2 overflow-x-auto scroll-smooth px-[151px] focus:rounded-xs focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:outline-none"
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

const WheelPickerOption = ({ isActive, value }) => {
  return (
    <div className="flex min-w-10 snap-center flex-col items-center">
      <span
        className={`h-8 w-0.5 rounded-full transition-all ${
          isActive ? "h-10 w-1 bg-stone-800" : " bg-stone-300"
        }`}
      ></span>
      <p
        className={` ${isActive ? "text-sm text-stone-800" : "text-xs text-stone-400"}`}
      >
        {value}
      </p>
    </div>
  );
};

export default WheelPicker;
