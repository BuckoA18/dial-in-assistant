import React, { useEffect, useRef, useState } from "react";
import { calcRange } from "./../utils";
import Input from "./Input";

const WheelPicker = ({ min = 1, max = 500, step = 1 }) => {
  const [currentValue, setCurrentValue] = useState(min);
  const [isTyping, setIsTyping] = useState(false); // New state to track input focus
  const scrollRef = useRef(null);

  const range = calcRange(min, max, step);
  const optionWidth = 48;

  // 1. Only scroll the wheel if the user IS NOT typing
  useEffect(() => {
    if (scrollRef.current && !isTyping) {
      const targetScroll = (currentValue - min) * optionWidth;
      scrollRef.current.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });
    }
  }, [currentValue, min, isTyping]);

  const handleScroll = (e) => {
    // 2. If the user is typing, ignore scroll events (prevents snapping conflicts)
    if (isTyping) return;

    const container = e.target;
    const scrollLeft = container.scrollLeft;
    const index = Math.round(scrollLeft / optionWidth) + min;

    if (index !== currentValue && index >= min && index <= max) {
      setCurrentValue(index);
    }
  };

  const handleChange = (e) => {
    // Allow empty string so user can backspace and type a new number
    if (e.target.value === "") {
      setCurrentValue("");
      return;
    }

    const value = Number(e.target.value);
    if (value >= 0) {
      // Temporary allow values outside range while typing
      setCurrentValue(value);
    }
  };

  const handleBlur = () => {
    setIsTyping(false);
    // 3. Clamp the value only when the user finishes typing
    let finalValue = Number(currentValue);
    if (finalValue < min) finalValue = min;
    if (finalValue > max) finalValue = max;
    setCurrentValue(finalValue);
  };

  return (
    <div className="flex flex-col items-center">
      <Input
        value={currentValue}
        type="number"
        onChange={handleChange}
        onFocus={() => setIsTyping(true)} // Stop wheel interference
        onBlur={handleBlur} // Restart wheel interference
      />

      <div className="relative flex h-40 w-76 items-center">
        <div className="pointer-events-none absolute left-1/2 z-10 h-16 w-10 -translate-x-1/2 rounded-sm border-3 border-stone-400 bg-stone-200 opacity-30 shadow-sm"></div>
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          // 4. If user touches the wheel, they aren't typing anymore
          onMouseDown={() => setIsTyping(false)}
          onTouchStart={() => setIsTyping(false)}
          className="no-scrollbar flex h-28 w-full snap-x snap-mandatory items-center gap-2 overflow-x-auto scroll-smooth px-[152px]"
        >
          {range.map((value) => (
            <WheelPickerOption
              key={value}
              isActive={value === Number(currentValue)}
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
          isActive ? "h-10 bg-stone-800" : " bg-stone-300"
        }`}
      ></span>
    </div>
  );
};

export default WheelPicker;
