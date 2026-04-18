import { Fullscreen } from "lucide-react";
import React from "react";

const Card = ({ children }) => {
  return (
    <div className={`h-full w-full rounded-md border-2 border-gray-200 p-2`}>
      {children}
    </div>
  );
};

export default Card;
