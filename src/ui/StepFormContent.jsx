import { useState } from "react";
import { coffeeInventory, grindHistory, TasteProfiles } from "../dummyData";
import Input from "../ui/Input";
import Textarea from "../ui/Textarea";
import WheelPicker from "./WheelPicker";
import Grid from "./Grid";
import Detail from "./Detail";
import Label from "./Label";
import CoffeeProfile from "./CoffeeProfile";
import GrindProfile from "./GrindProfile";
import CardSelect from "./CardSelect";
import Card from "./Card";
import TasteFeedbackProfile from "./TasteFeedbackProfile";

import { Beaker, Droplets, Flame, CheckCircle2, MoveRight } from "lucide-react";

const StepFormContent = ({ currentStep }) => {
  const [dose, setDose] = useState(null);
  const [coffeeYield, setcoffeeYield] = useState(null);
  const [extractionTime, setExtractionTime] = useState(null);
  if (currentStep === 1)
    return (
      <div className="grow px-2 py-4">
        <CardSelect
          key="coffee-selection"
          options={coffeeInventory}
          optionComponent={CoffeeProfile}
          styles="max-h-100"
          defaultValue={coffeeInventory[0]}
        />
      </div>
    );
  if (currentStep === 2)
    return (
      <div className="flex grow flex-col px-2 py-4 sm:mx-auto sm:max-w-5xl sm:px-4">
        <CardSelect
          key="grind-selection"
          options={grindHistory}
          optionComponent={GrindProfile}
          styles="max-h-72"
          defaultValue={grindHistory[1]}
        />
        <span className="sm:hidden">
          <WheelPicker min={1} max={50} />
        </span>
      </div>
    );
  if (currentStep === 3)
    return (
      <div className="flex grow flex-col gap-6 px-2 py-4 sm:mx-auto sm:max-w-5xl sm:flex-row sm:justify-center sm:gap-12">
        <div className="flex flex-col gap-5 sm:w-1/2 sm:justify-center">
          <div className="flex flex-col gap-1.5 sm:items-center sm:gap-4">
            <Input
              id="dose"
              className="sm:col-span-3"
              placeholder="Dose (g)"
              onChange={(e) => setDose(e.target.value)}
            />
          </div>

          <Input
            id="yield"
            className="sm:col-span-2"
            placeholder="Yield (g)"
            onChange={(e) => setcoffeeYield(e.target.value)}
          />

          <Input
            id="extractionTime"
            className="sm:col-span-2"
            placeholder="Extraction time (s)"
            onChange={(e) => setExtractionTime(e.target.value)}
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
                <Difference prevValue={18} unit="g" value={dose} />
              </Detail>
              <Detail label="Yield">
                <Difference prevValue={32} unit="g" value={coffeeYield} />
              </Detail>
              <Detail label="Time">
                <Difference prevValue={24} unit="s" value={extractionTime} />
              </Detail>
            </Grid>
          </Card>
        </div>
      </div>
    );

  if (currentStep === 4)
    return (
      <div className="animate-in fade-in grow px-2 py-4">
        <CardSelect
          key="grind-selection"
          options={TasteProfiles}
          optionComponent={TasteFeedbackProfile}
          styles="max-h-100 justify-center gap-2"
          defaultValue=""
        />
      </div>
    );
};

export default StepFormContent;

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
