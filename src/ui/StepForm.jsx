import React from "react";

const StepForm = ({ children, currentStep }) => {
  const steps = React.Children.toArray(children);
  const currentStepView = steps[currentStep - 1];

  console.log(steps);
  return (
    <main className="flex grow flex-col">
      <form className="">{currentStepView}</form>
    </main>
  );
};

export default StepForm;
