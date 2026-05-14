import React from "react";
import Button from "./Button";
import { ChevronDown } from "lucide-react";

const CardOption = ({
  children,
  onSelect,
  isSelected,
  onClose,
  isClosed,
  type,
}) => {
  if (type === "lg")
    return (
      <div
        className={`animate-in slide-in-from-top-5 relative rounded-2xl border-2 border-stone-200 p-4 shadow-sm transition-colors sm:my-auto sm:w-sm sm:border-none sm:shadow-none`}
        onClick={onSelect}
      >
        {children}
        <Button
          onClick={onClose}
          type="icon"
          styles={`absolute bottom-0 right-0 transition-rotate sm:hidden ${isSelected && ""} `}
        >
          {<ChevronDown size={20} />}
        </Button>
      </div>
    );

  if (type === "sm")
    return (
      <div
        className={`animate-in slide-in-from-top-5 relative rounded-xl border-2 p-4 shadow-sm transition-colors ${type === "large" && "sm:border-none"} ${isSelected && isClosed ? "border-orange-400" : "border-stone-200"} sm:w-2xs`}
        onClick={onSelect}
      >
        {children}
        <Button
          onClick={onClose}
          type="icon"
          styles={`absolute bottom-0 right-0 transition-rotate sm:hidden ${isSelected && ""} `}
        >
          {<ChevronDown size={20} />}
        </Button>
      </div>
    );
};

export default CardOption;
