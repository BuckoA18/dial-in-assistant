import { Fullscreen } from "lucide-react";
import React from "react";

const Card = ({ children }) => {
  return (
    <div className={`h-full w-full rounded-2xl p-2 text-stone-900 shadow-md`}>
      {children}
    </div>
  );
};

export default Card;
