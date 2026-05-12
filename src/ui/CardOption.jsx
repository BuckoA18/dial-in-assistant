import React from "react";
import Button from "./Button";
import { ChevronDown } from "lucide-react";

const CardOption = ({ children, onSelect, isSelected, onClose }) => {
  return (
    <div
      className={`animate-in slide-in-from-top-5 relative rounded-xl border-2 border-stone-200 p-4 shadow-sm transition-colors`}
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
