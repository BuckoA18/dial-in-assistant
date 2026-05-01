import React from "react";
import { Coffee, Star, Zap, Check } from "lucide-react";
import Step from "./Step";
import BackButton from "./BackButton";

const StepCounter = ({ children }) => {
  return (
    <div className="relative mt-2 mb-4 flex h-18 w-full items-center justify-center">
      {children}
    </div>
  );
};

export default StepCounter;
