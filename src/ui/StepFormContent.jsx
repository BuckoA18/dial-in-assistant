import Input from "../ui/Input";
import Textarea from "../ui/Textarea";
import WheelPicker from "./WheelPicker";
import Grid from "./Grid";
import GridItem from "./GridItem";
import Select from "react-select";
import CustomOption from "./CustomOption";
import CustomSingleValue from "./CustomSingleValue";
import TasteRangeInput from "./TasteRangeInput";

const beanOptions = [
  { label: "Brasil", value: "brasil", countryCode: "BE" },
  { label: "Ethiopie", value: "ethiopie", countryCode: "ET" },
  { label: "India", value: "india", countryCode: "IN" },
];

const StepFormContent = ({ currentStep }) => {
  if (currentStep === 1)
    return (
      <div className="flex h-full flex-col">
        <label className="flex flex-col gap-4 text-xl font-semibold text-stone-800">
          On The Grinder
          <Select
            options={beanOptions}
            defaultValue={beanOptions[0]}
            components={{
              Option: CustomOption,
              SingleValue: CustomSingleValue,
            }}
          />
        </label>

        <span className="mt-auto">
          <WheelPicker min={1} max={50} />
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
