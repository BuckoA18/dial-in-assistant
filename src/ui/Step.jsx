import React from "react";
import { Check } from "lucide-react";

const Step = ({ isActive, isLast, onChangeStep, step, isComplete }) => {
  if (isComplete)
    return (
      <>
        <span
          onClick={() => onChangeStep(step)}
          className={`flex size-4 items-center justify-center rounded-full border text-green-400 shadow-sm transition-all ${isComplete && "border-green-400 bg-green-100"} `}
        >
          {<Check size={12} />}
        </span>
        <p
          className={`h-0.5 w-18 rounded-full ${isComplete ? "bg-green-400" : "bg-stone-300"}`}
        ></p>
      </>
    );
  return (
    <>
      <span
        onClick={() => onChangeStep(step)}
        className={`flex size-6 items-center justify-center rounded-full shadow-sm transition-all ${isActive ? "size-8 border-2 border-orange-300 bg-orange-200" : "bg-stone-300"} `}
      >
        <p
          className={`text-sm ${isActive ? "text-stone-800" : "text-stone-400"}`}
        >
          {step}
        </p>
      </span>
      {!isLast && <p className={`h-1 w-18 rounded-full bg-stone-300`}></p>}
    </>
  );
};

export default Step;
