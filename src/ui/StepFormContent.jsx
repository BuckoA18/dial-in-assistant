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
import CoffeeProfile from "./CoffeeProfile";

const testCoffee = {
  name: "Brasil Santos",
  roaster: "Caffee Montana",
  origin: "Brasil",
  countryCode: "BR",
  method: "Washed",
  roastLevel: 4,
  altitude: "1600",
  variety: "N/A",
  notes: ["Dark chocolate", "Almods", "Hazelnuts"],
  intensity: { acidity: 3, body: 4, sweetness: 2 },
};

const beanOptions = [
  { label: "Brasil", value: "brasil", countryCode: "BR" },
  { label: "Ethiopie", value: "ethiopie", countryCode: "ET" },
  { label: "India", value: "india", countryCode: "IN" },
];

const StepFormContent = ({ currentStep }) => {
  if (currentStep === 1)
    return (
      <div className="flex grow flex-col gap-4 px-2">
        <span>
          <label
            htmlFor="bean"
            className="mb-1 ml-1 block text-sm font-semibold text-stone-800"
          >
            On the grinder
          </label>
          <Select id="bean">
            {beanOptions.map((option) => (
              <option value={option.value} key={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
        </span>

        <CoffeeProfile coffee={testCoffee} />
      </div>
    );
  if (currentStep === 2)
    return (
      <div className="flex w-full grow flex-col px-2">
        <span className="flex w-full flex-col">
          <label
            htmlFor="temperature"
            className="mb-1 ml-1 block text-sm font-semibold text-stone-800"
          >
            Weter temperature{" "}
          </label>
          <span className="flex w-full justify-between rounded-full border border-stone-300 px-2 shadow-sm focus-within:ring-2 focus-within:ring-orange-600 focus-within:ring-offset-2 focus-within:outline-none">
            <input
              type="number"
              id="temperature"
              className="min-w-48 px-4 py-2 focus:outline-none"
            />
            <select className="focus:outline-none">
              <option value="celsius">Celsius</option>
              <option value="ferenheit">Ferenheit</option>
            </select>
          </span>
        </span>
        <span></span>
        <span className="mt-auto">
          <label className="mb-1 ml-1 text-sm font-semibold text-stone-800">
            Grind Setting
          </label>
          <WheelPicker min={1} max={50} />
        </span>
      </div>
    );

  if (currentStep === 3)
    return (
      <div className="flex grow flex-col items-center gap-8 px-2">
        <span>
          <label
            htmlFor="coffeeIn"
            className="mb-1 ml-1 text-sm font-semibold text-stone-800"
          >
            Coffee In (g)
          </label>
          <Input id="coffeeIn" placeholder="18" type="number" />
        </span>
        <span>
          <label
            htmlFor="coffeeIn"
            className="text-sm font-semibold text-stone-800"
          >
            Coffee Out (g)
          </label>
          <Input
            label="Coffee out (g)"
            id="coffeeOut"
            placeholder="38.4"
            type="number"
          />
        </span>
        <span>
          <label
            htmlFor="coffeeIn"
            className="text-sm font-semibold text-stone-800"
          >
            Extraction Time (s)
          </label>

          <Input
            label="Time of extraction (s)"
            id="extractionTime"
            placeholder="28"
            type="number"
          />
        </span>
      </div>
    );

  if (currentStep === 4)
    return (
      <div className="h-full px-2">
        <TasteRangeInput />
      </div>
    );
};

export default StepFormContent;
