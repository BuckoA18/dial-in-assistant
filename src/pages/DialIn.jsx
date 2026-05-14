import React, { useState } from "react";
import { grindHistory, TasteProfiles } from "../dummyData";
import { MoveRight } from "lucide-react";
import Button from "../ui/Button";
import StepForm from "../ui/StepForm";
import StepCounter from "../ui/StepCounter";
import CoffeeProfile from "../ui/CoffeeProfile";
import CardSelect from "../ui/CardSelect";
import GrindProfile from "../ui/GrindProfile";
import TasteFeedbackProfile from "../ui/TasteFeedbackProfile";
import WheelPicker from "../ui/WheelPicker";
import Input from "../ui/Input";
import Card from "../ui/Card";
import Grid from "../ui/Grid";
import Detail from "../ui/Detail";
import CoffeeStep from "../features/stepForm/CoffeeStep";
import GrinderStep from "../features/stepForm/GrinderStep";

const MIN_STEP = 1;
const MAX_STEP = 4;

const DialIn = () => {
  const [formData, setFormData] = useState({
    dose: "",
    yield: "",
    time: "",
  });
  const [currentStep, setCurrentStep] = useState(1);

  const handleChangeStep = (nextStep) => {
    if (nextStep < MIN_STEP || nextStep > MAX_STEP) return;
    setCurrentStep(nextStep);
  };

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="flex h-dvh flex-col">
      <header>
        <StepCounter
          currentStep={currentStep}
          onChangeStep={handleChangeStep}
        />
      </header>
      <StepForm currentStep={currentStep}>
        <CoffeeStep />
        <GrinderStep />
        <ShotStep formData={formData} updateField={updateField} />
        <TasteStep />
      </StepForm>
      <footer className="w-full px-2 pb-2 sm:flex sm:justify-end sm:gap-2">
        {currentStep <= MAX_STEP ? (
          <>
            <Button
              type="secondary"
              styles="hidden sm:block"
              onClick={(e) => {
                e.preventDefault();
                handleChangeStep(currentStep - 1);
              }}
            >
              Back
            </Button>
            <Button
              type="primary"
              onClick={(e) => {
                e.preventDefault();
                handleChangeStep(currentStep + 1);
              }}
              styles=""
            >
              Next
            </Button>
          </>
        ) : (
          <Button type="submit">Analyze Shot</Button>
        )}
      </footer>
    </div>
  );
};

export default DialIn;

const ShotStep = ({ formData, updateField }) => {
  return (
    <div className="flex grow flex-col gap-6 px-2 py-4 sm:mx-auto sm:max-w-5xl sm:flex-row sm:justify-center sm:gap-12">
      <div className="flex flex-col gap-5 sm:w-1/2 sm:justify-center">
        <div className="flex flex-col gap-1.5 sm:items-center sm:gap-4">
          <Input
            id="dose"
            className="sm:col-span-3"
            placeholder="Dose (g)"
            onChange={(e) => updateField("dose", +e.target.value)}
            value={formData.dose}
          />
        </div>

        <Input
          id="yield"
          className="sm:col-span-2"
          placeholder="Yield (g)"
          onChange={(e) => updateField("yield", e.target.value)}
          value={formData.yield}
        />

        <Input
          id="extractionTime"
          className="sm:col-span-2"
          placeholder="Extraction time (s)"
          onChange={(e) => updateField("time", e.target.value)}
          value={formData.time}
        />
      </div>

      <div className="my-8 hidden w-px bg-stone-200 sm:block" />

      <div className="sm:flex sm:grow sm:items-center">
        <Card styles="w-full sm:h-fit sm:border-none sm:shadow-none">
          <p className="mb-4 text-xs text-stone-400 italic">
            Compared to latest shot
          </p>
          <Grid type="details">
            <Detail label="Dose">
              <Difference prevValue={18} unit="g" value={formData.dose} />
            </Detail>
            <Detail label="Yield">
              <Difference prevValue={32} unit="g" value={formData.yield} />
            </Detail>
            <Detail label="Time">
              <Difference prevValue={24} unit="s" value={formData.time} />
            </Detail>
          </Grid>
        </Card>
      </div>
    </div>
  );
};
const TasteStep = () => {
  return (
    <>
      <CardSelect
        key="grind-selection"
        options={TasteProfiles}
        optionComponent={TasteFeedbackProfile}
        styles="max-h-100 justify-center gap-2"
        defaultValue=""
      />
    </>
  );
};

const Difference = ({ prevValue, unit, value }) => {
  const difference = value ? (parseFloat(value) - prevValue).toFixed(1) : null;

  return (
    <div className="mr-2 flex items-center gap-2 text-xs font-semibold text-stone-400">
      <span className="flex gap-2">
        {prevValue}
        {unit}
        <MoveRight size={12} />
      </span>

      {value && (
        <span className="text-orange-400">
          {difference > 0 ? `+${difference}` : difference}
          {unit}
        </span>
      )}
    </div>
  );
};
