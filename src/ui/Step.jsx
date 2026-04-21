import React from "react";
import { Check } from "lucide-react";

const Step = ({ currentStep, icon, step, isFirst }) => {
  return (
    <>
      {!isFirst && <p className="h-0.5 w-8 bg-gray-300"></p>}
      <span
        className={`flex h-4 w-4 flex-col items-center justify-center rounded-full border-2 ${currentStep === step ? " h-10 w-10 border-t-gray-800" : " text-gray-300"} shadow-sm transition-all`}
      >
        {currentStep === step ? icon : <Check />}
      </span>
    </>
  );
};

export default Step;
