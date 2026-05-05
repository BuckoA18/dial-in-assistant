import React from "react";
import { useState } from "react";
import { Coffee, Star, Zap, Cog, ChevronLeft } from "lucide-react";
import StepFormContent from "./StepFormContent";
import Button from "./Button";
import StepCounter from "./StepCounter";
import Step from "./Step";
import BackButton from "./BackButton";

const MIN_STEP = 1;
const MAX_STEP = 4;

const STEPS = [
  {
    step: 1,
    label: "What are we Dialing In?",
    icon: <Coffee size={20} />,
    isComplete: false,
  },
  {
    step: 2,
    label: "Tech details",
    icon: <Cog size={20} />,
    isComplete: false,
  },
  {
    step: 3,
    label: "Give us your shot details",
    icon: <Star size={20} />,
    isComplete: false,
  },
  {
    step: 4,
    label: "How was it?",
    icon: <Star size={20} />,
    isComplete: false,
  },
];

const StepForm = ({ onSubmit }) => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleChangeStep = (step) => {
    console.log(step);
    setCurrentStep(step);
  };

  return (
    <form
      className="flex h-full flex-col gap-2"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <StepCounter>
        <div className="flex h-10 w-full items-center justify-around">
          {STEPS.map((step) => (
            <Step
              step={step.step}
              isActive={currentStep === step.step}
              key={step.step}
              isLast={step.step === 4}
              onChangeStep={handleChangeStep}
              label={step.label}
              isComplete={step.isComplete}
            />
          ))}
        </div>
        <h2 className="text-lg font-semibold text-stone-800">
          {STEPS[currentStep - 1].label}
        </h2>
      </StepCounter>

      <StepFormContent currentStep={currentStep} />
      <div className="mt-auto mb-2 flex items-center px-2 sm:mb-26">
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
