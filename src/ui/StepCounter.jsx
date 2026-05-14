import React from "react";
import { Coffee, Star, Zap, Cog, ArrowLeft } from "lucide-react";
import Step from "./Step";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { decrement } from "../features/stepForm/stepCounterSlice";

const STEPS = [
  {
    step: 1,
    label: "On the grinder",
    icon: <Coffee size={20} />,
    isComplete: false,
  },
  {
    step: 2,
    label: "Set your Grinder",
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

const StepCounter = () => {
  const dispatch = useDispatch();
  const currentStep = useSelector((state) => state.counter.value);
  return (
    <div className="relative flex w-full flex-col items-center gap-2 rounded-b-xl border-2 border-stone-200 shadow-xs sm:gap-4">
      <div className="flex w-full items-center justify-around gap-1 sm:max-w-98 sm:gap-2">
        {STEPS.map((step) => (
          <Step
            step={step.step}
            isActive={currentStep === step.step}
            key={step.step}
            label={step.label}
            isComplete={step.isComplete}
          />
        ))}
      </div>

      <StepLabel>{STEPS[currentStep].label}</StepLabel>
      <Button
        type="icon"
        styles="absolute bottom-2 left-1 sm:hidden"
        onClick={(e) => {
          e.preventDefault();
          dispatch(decrement());
        }}
      >
        <ArrowLeft size={22} />
      </Button>
    </div>
  );
};

const StepLabel = ({ children }) => {
  return (
    <h2 className="my-2 text-lg font-bold text-stone-800 sm:text-2xl">
      {children}
    </h2>
  );
};

export default StepCounter;
