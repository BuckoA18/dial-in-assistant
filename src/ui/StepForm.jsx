import React from "react";
import { useSelector } from "react-redux";

const StepForm = ({ children }) => {
  const currentStep = useSelector((state) => state.counter.value);

  const steps = React.Children.toArray(children);
  const currentStepView = steps[currentStep - 1];

  return (
    <main className="grow">
      <form className="flex h-full flex-col px-2 py-4 sm:items-center">
        {currentStepView}
      </form>
    </main>
  );
};

export default StepForm;
