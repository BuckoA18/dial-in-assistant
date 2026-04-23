import { Fullscreen } from "lucide-react";
import React from "react";

const Card = ({ children }) => {
  return (
    <div
      className={`h-full w-full rounded-md border border-gray-200 p-2 text-stone-900 shadow-xs`}
    >
      {children}
    </div>
  );
};

export default Card;
