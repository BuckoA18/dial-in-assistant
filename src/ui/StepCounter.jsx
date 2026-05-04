import React from "react";
import { Coffee, Star, Zap, Check } from "lucide-react";
import Step from "./Step";
import BackButton from "./BackButton";

const StepCounter = ({ children }) => {
  return (
    <div className="relative flex min-h-24 w-full flex-col items-center justify-center gap-2 rounded-b-2xl bg-stone-200">
      {children}
    </div>
  );
};

export default StepCounter;
