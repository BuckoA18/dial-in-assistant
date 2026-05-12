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
      <div className="flex grow items-center px-2 py-4">
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
      <div className="animate-in fade-in flex grow flex-col items-center justify-between px-2">
        <CardSelect
          key="grind-selection"
          options={grindHistory}
          optionComponent={GrindProfile}
          styles="max-h-72"
          defaultValue={grindHistory[1]}
        />
        <WheelPicker min={1} max={50} />
      </div>
    );
  if (currentStep === 3)
    return (
      <div className="animate-in fade-in flex grow flex-col justify-between px-2">
        <div className="flex flex-col gap-2">
          <span>
            <Label forId="dose">Dose (g)</Label>
            <Input
              id="dose"
              placeholder=""
              onChange={(e) => setDose(e.target.value)}
            />
          </span>
          <span>
            <Label forId="yield">Yield (g)</Label>
            <Input
              id="yield"
              placeholder=""
              onChange={(e) => setcoffeeYield(e.target.value)}
            />
          </span>
          <span>
            <Label forId="extractionTime">Extraction time (g)</Label>
            <Input
              id="extractionTime"
              placeholder=""
              onChange={(e) => setExtractionTime(e.target.value)}
            />
          </span>
        </div>

        <Card>
          <p className="mb-2 text-xs text-stone-400 italic">
            Compared to latest shot
          </p>
          <Grid type="details">
            <Detail label="Dose">
              <Difference prevValue={18} unit="g" value={dose} />
            </Detail>
            <Detail label="Yeild">
              <Difference prevValue={32} unit="g" value={coffeeYield} />
            </Detail>
            <Detail label="Extraction Time">
              <Difference prevValue={24} unit="s" value={extractionTime} />
            </Detail>
          </Grid>
        </Card>
      </div>
    );

  if (currentStep === 4)
    return (
      <div className="animate-in fade-in flex grow px-2">
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
