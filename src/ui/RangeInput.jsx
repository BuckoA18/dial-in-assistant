import React from "react";
import Label from "./Label";

const RangeInput = ({ min = 0, max = 10, isDisabled, id, label }) => {
  return (
    <Label id={id} label={label}>
      <input type="range" min={min} max={max} disabled={isDisabled} />
    </Label>
  );
};

export default RangeInput;
