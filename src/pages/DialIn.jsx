import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../ui/Input";
import Select from "../ui/Select";
import Card from "../ui/Card";
import Button from "../ui/Button";
import LinkButton from "../ui/LinkButton";
import Textarea from "../ui/Textarea";
import RangeInput from "../ui/RangeInput";

const MIN_STEP = 1;
const MAX_STEP = 3;

const DialIn = () => {
  const [step, setStep] = useState(1);
  const [isAnalyzeOpen, setIsAnalyzeOpen] = useState(false);

  const handleAnalyzeShot = () => {
    if (step !== MAX_STEP) return;
    setIsAnalyzeOpen(true);
    console.log("first");
  };

  return (
    <>
      <div className="flex h-full flex-col gap-2 px-2">
        <h2>Step: {step}</h2>

        <div className="flex flex-col gap-4">
          <StepFormContent step={step} />
        </div>

        <div className="mt-auto mb-14 flex items-center justify-between">
          {step > MIN_STEP && (
            <Button onClick={() => setStep((prevStep) => prevStep - 1)}>
              Back
            </Button>
          )}
          {step !== MAX_STEP ? (
            <Button onClick={() => setStep((prevStep) => prevStep + 1)}>
              Next
            </Button>
          ) : (
            <Button onClick={handleAnalyzeShot}>Analyze Shot</Button>
          )}
        </div>

        {isAnalyzeOpen && (
          <div className="mb-14">
            <p>
              Shot ran too fast (15s) tho giving you acidic shot, try setting
              the grindeer 3 notches finer
            </p>
            <Button
              onClick={() => {
                setStep(2);
                setIsAnalyzeOpen(false);
              }}
            >
              I will try one more shot
            </Button>
            <LinkButton to="/">I am happy</LinkButton>
          </div>
        )}
      </div>
    </>
  );
};

const StepFormContent = ({ step }) => {
  if (step === 1)
    return (
      <>
        <Select label="Bean" id="bean">
          <option>Brasil</option>
          <option>Ethioopie</option>
          <option>India</option>
        </Select>

        <Select label="Roast Level" id="roastLevel">
          <option>Light</option>
          <option>Medium</option>
          <option>Dark</option>
        </Select>

        <Select label="Desired Output" id="output">
          <option>Modern Espresso</option>
          <option>Ristretto</option>
          <option>Lungo</option>
        </Select>
      </>
    );

  if (step === 2)
    return (
      <>
        <Input label="Grind setting" id="grindSetting" />
        <Input label="Coffee in (g)" id="coffeeIn" />
        <Input label="Coffee out (g)" id="coffeeOut" />
        <Input label="Time of extraction (s)" id="extractionTime" />
      </>
    );

  if (step === 3)
    return (
      <>
        <RangeInput label="Taste" id="taste" />
        <Textarea label="Notes" id="notes" />
      </>
    );
};

export default DialIn;
