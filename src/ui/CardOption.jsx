import React from "react";
import Button from "./Button";
import { ChevronDown } from "lucide-react";

const CardOption = ({ children, onSelect, isSelected, onClose }) => {
  return (
    <div
      className={`animate-in fade-in relative flex flex-col rounded-xl border-2 p-4 shadow-sm transition-colors ${isSelected ? " gap-2 border-orange-400" : "border-stone-200"} `}
      onClick={onSelect}
    >
      {children}
      <Button
        onClick={onClose}
        type="icon"
        styles={`absolute bottom-0 right-0 transition-rotate ${isSelected ? "rotate-180" : ""}`}
      >
        {<ChevronDown size={20} />}
      </Button>
    </div>
  );
};

export default CardOption;
