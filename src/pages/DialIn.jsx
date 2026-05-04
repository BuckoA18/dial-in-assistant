import React, { useState } from "react";
import { Link } from "react-router-dom";
import LinkButton from "../ui/LinkButton";
import Button from "../ui/Button";
import StepForm from "../ui/StepForm";

const DialIn = () => {
  const [isAnalyzeOpen, setIsAnalyzeOpen] = useState(false);

  const handleAnalyzeShot = () => {
    setIsAnalyzeOpen(true);
  };

  return (
    <main className="h-dvh">
      <StepForm
        className="flex flex-col gap-2 px-2"
        onSubmit={handleAnalyzeShot}
      />

      {isAnalyzeOpen && (
        <div className="mb-14">
          <p>
            Shot ran too fast (15s) tho giving you acidic shot, try setting the
            grindeer 3 notches finer
          </p>

          <LinkButton to="/">I am happy</LinkButton>
        </div>
      )}
    </main>
  );
};

export default DialIn;
