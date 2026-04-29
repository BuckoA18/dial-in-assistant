import Input from "../ui/Input";
import Textarea from "../ui/Textarea";
import WheelPicker from "./WheelPicker";
import Grid from "./Grid";
import GridItem from "./GridItem";
import Select from "./Select";
import CustomOption from "./CustomOption";
import CustomSingleValue from "./CustomSingleValue";
import TasteRangeInput from "./TasteRangeInput";
import Label from "./Label";

const beanOptions = [
  { label: "Brasil", value: "brasil", countryCode: "BR" },
  { label: "Ethiopie", value: "ethiopie", countryCode: "ET" },
  { label: "India", value: "india", countryCode: "IN" },
];

const StepFormContent = ({ currentStep }) => {
  if (currentStep === 1)
    return (
      <div className="flex h-full flex-col">
        <Label id="bean">On The Grinder</Label>
        <Select id="bean">
          {beanOptions.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </Select>
        <span className="mt-auto">
          <Label id="grindPicker">Grinder Settings</Label>
          <WheelPicker min={1} max={50} id="grindPicker" />
        </span>
      </div>
    );

  if (currentStep === 2)
    return (
      <div className="flex h-full flex-col items-center gap-4">
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

        <Input
          label="Time of extraction (s)"
          id="extractionTime"
          placeholder="28"
          type="number"
        />
      </div>
    );

  if (currentStep === 3)
    return (
      <div className="h-full">
        <TasteRangeInput />
      </div>
    );
};

export default StepFormContent;
