import { Fullscreen } from "lucide-react";
import React from "react";

const Card = ({ children, styles }) => {
  return (
    <div
      className={`animate-in slide-in-from-top-5 relative rounded-xl border-2 border-stone-200 p-4 shadow-sm transition-colors ${styles}`}
    >
      {children}
    </div>
  );
};

export default Card;
