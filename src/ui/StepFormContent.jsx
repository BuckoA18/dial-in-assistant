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
import GrinderHistory from "./GrinderHistory";

const historyData = [
  {
    id: 1,
    setting: 18,
    date: "May 5, 2026",
    note: "Perfect balance, very sweet finish.",
  },

  {
    id: 2,
    setting: 20,
    date: "May 4, 2026",
    note: "A bit watery, need to go bit finer.",
  },
  {
    id: 3,
    setting: 25,
    date: "May 3, 2026",
    note: "Really watery and acidic, need to go a lot finer",
  },
];

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
      <div className="flex grow flex-col items-center justify-between px-2">
        <GrinderHistory history={historyData} />
        <WheelPicker min={1} max={50} />
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
