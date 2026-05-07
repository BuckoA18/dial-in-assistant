import React from "react";
import { Check } from "lucide-react";

const Step = ({ isActive, onChangeStep, step }) => {
  return (
    <span
      onClick={() => onChangeStep(step)}
      className={`grow rounded-full transition-all ${isActive ? "h-1 w-10 bg-orange-400" : " h-1 w-8 bg-stone-300"}`}
    ></span>
  );
};

export default Step;
