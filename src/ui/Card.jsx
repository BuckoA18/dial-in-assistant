import { Fullscreen } from "lucide-react";
import React from "react";

const Card = ({ children }) => {
  return (
    <div
      className={`text-gray-900-200 h-full w-full rounded-xs border border-gray-300 bg-white p-2`}
    >
      {children}
    </div>
  );
};

export default Card;
