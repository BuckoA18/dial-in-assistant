import React from "react";
import { useState } from "react";
import { Coffee, Star, Zap, Cog, ChevronLeft } from "lucide-react";
import StepFormContent from "./StepFormContent";
import Button from "./Button";
import StepCounter from "./StepCounter";
import Step from "./Step";
import BackButton from "./BackButton";

const MIN_STEP = 1;
const MAX_STEP = 3;

const STEPS = [
  { step: 1, icon: <Coffee size={20} /> },
  { step: 2, icon: <Cog size={20} /> },
  { step: 3, icon: <Star size={20} /> },
];

const StepForm = ({ onSubmit }) => {
  const [currentStep, setCurrentStep] = useState(2);

  return (
    <form
      className="flex h-full flex-col gap-2 px-2"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <StepCounter>
        {STEPS.map((step) => (
          <Step
            currentStep={currentStep}
            step={step.step}
            icon={step.icon}
            key={step.step}
            isFirst={step.step === 1}
          />
        ))}
        <BackButton>
          <ChevronLeft
            size={20}
            onClick={(e) => {
              e.preventDefault();
              setCurrentStep((prevCurrentStep) => {
                if (prevCurrentStep === MIN_STEP) return prevCurrentStep;

                return prevCurrentStep - 1;
              });
            }}
          />
        </BackButton>
      </StepCounter>

      <StepFormContent currentStep={currentStep} />
      <div className="mt-auto mb-16 flex items-center">
        {currentStep !== MAX_STEP ? (
          <Button
            onClick={(e) => {
              e.preventDefault();
              setCurrentStep((prevCurrentStep) => {
                if (prevCurrentStep === MAX_STEP) return prevCurrentStep;
                return prevCurrentStep + 1;
              });
            }}
          >
            Next
          </Button>
        ) : (
          <Button type="submit">Analyze Shot</Button>
        )}
      </div>
    </form>
  );
};

export default StepForm;
