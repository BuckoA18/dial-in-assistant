import React from "react";
import { useState } from "react";

import StepFormContent from "./StepFormContent";
import Button from "./Button";
import StepCounter from "./StepCounter";
import Step from "./Step";
import BackButton from "./BackButton";

const MIN_STEP = 1;
const MAX_STEP = 4;

const StepForm = ({ onSubmit }) => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleChangeStep = (nextStep) => {
    if (nextStep < MIN_STEP || nextStep > MAX_STEP) return;
    setCurrentStep(nextStep);
  };

  return (
    <form
      className="flex h-full flex-col gap-2"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <StepCounter currentStep={currentStep} onChangeStep={handleChangeStep} />

      <StepFormContent currentStep={currentStep} />
      <div className="mt-auto mb-2 flex items-center gap-2 px-2 sm:mb-4 sm:ml-auto">
        {currentStep !== MAX_STEP ? (
          <>
            <Button type="secondary" styles="hidden sm:block">
              Back
            </Button>
            <Button
              type="primary"
              onClick={(e) => {
                e.preventDefault();
                handleChangeStep(currentStep + 1);
              }}
            >
              Next
            </Button>
          </>
        ) : (
          <Button type="submit">Analyze Shot</Button>
        )}
      </div>
    </form>
  );
};

export default StepForm;
