import React from "react";
import { components } from "react-select";
import { getFlag } from "../services/flagService";

const CustomOption = ({ ...props }) => {
  const { label, countryCode } = props.data;
  return (
    <components.Option {...props}>
      <div className="h-4 w-4 rounded-full bg-amber-400 shadow-sm"></div>
      <p className="">{label}</p>
      <img src={getFlag(countryCode)} />
    </components.Option>
  );
};

export default CustomOption;
