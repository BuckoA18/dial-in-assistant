import React from "react";
import Label from "./Label";
const Textarea = ({ id, label }) => {
  return (
    <Label label={label} id={id}>
      <textarea id={id} />
    </Label>
  );
};

export default Textarea;
