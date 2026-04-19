import React, { useState } from "react";
import Input from "../ui/Input";
import Select from "../ui/Select";
import Card from "../ui/Card";

const MIN_STEP = 1;
const MAX_STEP = 3;

const DialIn = () => {
  const [step, setStep] = useState(1);

  return (
    <>
      <div>
        <h2>Step: {step}</h2>

        {step > MIN_STEP && (
          <button onClick={() => setStep((prevStep) => prevStep - 1)}>
            Back
          </button>
        )}
        {step < MAX_STEP && (
          <button onClick={() => setStep((prevStep) => prevStep + 1)}>
            Next
          </button>
        )}
      </div>
    </>
  );
};

export default DialIn;
