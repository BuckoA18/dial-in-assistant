import React from "react";

import { Icon } from "lucide-react";
import { coffeeBean } from "@lucide/lab";
import { calcRange } from "../utils";

const rateRange = calcRange(1, 5, 1);

const RoastProfile = ({ roastLevel = 3 }) => {
  return (
    <div className="flex gap-2">
      {rateRange.map((value) => (
        <Icon
          iconNode={coffeeBean}
          key={value}
          size={22}
          className={`${value <= roastLevel ? "text-amber-800" : "text-stone-200"}`}
        />
      ))}
    </div>
  );
};

export default RoastProfile;
