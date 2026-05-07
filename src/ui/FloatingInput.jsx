import React from "react";
import { MoveRight } from "lucide-react";
import { toCamelCase } from "../utils";
import Input from "./Input";
import Label from "./Label";

const FloatingInput = ({ label, prevValue, unit = "N/A", onChange, value }) => {
  const difference = value ? (parseFloat(value) - prevValue).toFixed(1) : null;

  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <Label forId={toCamelCase(label)}>
          {label} ({unit})
        </Label>
        {prevValue && (
          <Difference
            prevValue={prevValue}
            unit={unit}
            difference={difference}
            value={value}
          />
        )}
      </div>
      <Input
        id={toCamelCase(label)}
        type="shot"
        placeholder={prevValue}
        onChange={onChange}
      />
    </div>
  );
};

export default FloatingInput;

const Difference = ({ prevValue, unit, difference, value }) => {
  return (
    <div className="mr-4 flex items-center gap-2 text-xs font-semibold text-stone-400">
      <span className="flex gap-2">
        {prevValue}
        {unit}
        <MoveRight size={12} />
      </span>

      {value && (
        <span className="text-orange-400">
          {difference > 0 ? `+${difference}` : difference}
          {unit}
        </span>
      )}
    </div>
  );
};
