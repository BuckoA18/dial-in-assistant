import React from "react";
import { components } from "react-select";
import { getFlag } from "../services/flagService";

const CustomSingleValue = ({ ...props }) => {
  const { label, countryCode } = props.data;
  return (
    <components.SingleValue {...props}>
      <div className="flex items-center gap-2">
        <div className="h-4 w-4 rounded-full bg-amber-400 shadow-sm"></div>
        <p className="">{label}</p>
        <img src={getFlag(countryCode)} />
      </div>
    </components.SingleValue>
  );
};

export default CustomSingleValue;
