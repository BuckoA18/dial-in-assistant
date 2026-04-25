import Select from "../ui/Select";
import Input from "../ui/Input";
import RangeInput from "../ui/RangeInput";
import Textarea from "../ui/Textarea";
import WheelPicker from "./WheelPicker";
import Grid from "./Grid";
import GridItem from "./GridItem";

const StepFormContent = ({ currentStep }) => {
  if (currentStep === 1)
    return (
      <div className="flex flex-col gap-4">
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
      </div>
    );

  if (currentStep === 2)
    return (
      <div className="flex grow flex-col gap-8">
        <span className="flex justify-center gap-8">
          <Input
            label="Coffee in (g)"
            id="coffeeIn"
            placeholder="18"
            type="number"
          />
          <Input
            label="Coffee out (g)"
            id="coffeeOut"
            placeholder="38.4"
            type="number"
          />
        </span>

        <Input
          label="Time of extraction (s)"
          id="extractionTime"
          placeholder="28"
          type="number"
        />

        <span className="mt-auto">
          <WheelPicker min={1} max={50} />
        </span>
      </div>
    );

  if (currentStep === 3)
    return (
      <>
        <RangeInput label="Taste" id="taste" />
        <Textarea label="Notes" id="notes" />
      </>
    );
};

export default StepFormContent;
