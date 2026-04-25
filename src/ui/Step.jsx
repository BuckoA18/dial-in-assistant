import React from "react";
import { Check } from "lucide-react";

const Step = ({ currentStep, icon, step, isFirst }) => {
  return (
    <>
      {!isFirst && <p className="h-0.5 w-4 bg-gray-300"></p>}
      <span
        className={`flex h-10 w-10 flex-col items-center justify-center rounded-full border-2 ${currentStep === step ? " border-gray-800" : " text-gray-300"} shadow-sm transition-colors ease-in`}
      >
        {icon}
      </span>
    </>
  );
};

export default Step;
