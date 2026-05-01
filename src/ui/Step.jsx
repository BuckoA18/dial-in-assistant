import React from "react";
import { Check } from "lucide-react";

const Step = ({ currentStep, icon, step, isFirst, onChangeStep }) => {
  return (
    <>
      {!isFirst && <p className="h-0.5 w-4 bg-gray-300"></p>}
      <span
        onClick={() => onChangeStep(step)}
        className={`flex flex-col items-center justify-center rounded-full border-2 ${currentStep === step ? " h-10 w-10 border-gray-800" : " h-8 w-8 text-gray-300"} shadow-sm transition-all duration-75`}
      >
        {icon}
      </span>
    </>
  );
};

export default Step;
