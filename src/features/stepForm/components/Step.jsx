import React from "react";
import { Check } from "lucide-react";

const Step = ({ isActive }) => {
  return (
    <span
      className={`h-1 grow rounded-full transition-colors ${isActive ? "bg-orange-400" : "bg-stone-300"} `}
    ></span>
  );
};

export default Step;
