import React from "react";
import { useState } from "react";

const WheelPicker = ({ min = 1, max = 50, step = 1 }) => {
  const [currentValue, setCurrentvalue] = useState(1);

  const range = (start, stop, step) =>
    Array.from(
      { length: Math.ceil((stop + 1 - start) / step) },
      (_, i) => start + i * step,
    );

  const values = range(min, max, step);

  const handleScroll = (e) => {
    console.log(e.target);
    const container = e.target;
    const scrollLeft = container.scrollLeft;

    // (total item w + gap)
    // 40px + 40px
    const itemWidth = 80;
    const index = Math.round(scrollLeft / itemWidth);
    console.log(index + 1);
    setCurrentvalue(index + 1);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <span>{currentValue}</span>

      <div
        className="relative flex h-40 w-76 items-center"
        onScroll={handleScroll}
      >
        <div className="pointer-events-none absolute left-1/2 z-10 h-18 w-14 -translate-x-1/2 rounded-lg border-2 border-gray-800"></div>
        <div
          onScroll={handleScroll}
          className="flex h-28 w-full snap-x snap-mandatory items-center gap-10 overflow-x-auto scroll-smooth px-[151px]"
        >
          {values.map((value) => (
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

// import React, { useState, useRef } from "react";

// const WheelPicker = ({ min = 2, max = 50, defaultValue = 2, step = 1 }) => {
//   const [currentValue, setCurrentValue] = useState(defaultValue);

//   const values = range(min, max, step);

//   const handleScroll = (e) => {
//     const container = e.target;
//     const scrollLeft = container.scrollLeft;

//     // Width of one item (w-10 = 40px) + gap (gap-6 = 24px) = 64px
//     const itemTotalWidth = 64;
//     const index = Math.round(scrollLeft / itemTotalWidth);
//     console.log(index);

//     if (values[index] !== undefined && values[index] !== currentValue) {
//       setCurrentValue(values[index]);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center gap-4">
//       <span className="text-2xl font-bold text-blue-600">{currentValue}</span>

//       <div className="relative flex w-80 items-center">
//         {/* The Selection Indicator (Fixed in center of container) */}
//         <div className="pointer-events-none absolute left-1/2 z-10 h-16 w-12 -translate-x-1/2 rounded-lg border-2 border-blue-500" />

//         {/* Scroll Container */}
//         <div
//           onScroll={handleScroll}
//           className="flex h-28 w-full snap-x snap-mandatory items-center gap-6 overflow-x-auto scroll-smooth px-[136px]"
//           /* px-[136px] allows the first/last items to reach the center (half container width minus half item width) */
//         >
//           {values.map((value) => (
//             <WheelPickerOption
//               value={value}
//               key={value}
//               isActive={currentValue === value}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// const WheelPickerOption = ({ value, isActive }) => {
//   return (
//     <div className="flex w-10 shrink-0 snap-center flex-col items-center transition-all duration-200">
//       <span
//         className={`h-8 w-1 rounded-full transition-colors ${
//           isActive ? "scale-y-125 bg-blue-500" : "bg-gray-300"
//         }`}
//       ></span>
//       <p
//         className={`text-lg font-medium transition-all ${
//           isActive
//             ? "scale-125 font-bold text-blue-600"
//             : "scale-100 text-gray-400"
//         }`}
//       >
//         {value}
//       </p>
//     </div>
//   );
// };

// // Helper inside or outside component
// const range = (start, stop, step) =>
//   Array.from(
//     { length: Math.ceil((stop + 1 - start) / step) },
//     (_, i) => start + i * step,
//   );

export default WheelPicker;
