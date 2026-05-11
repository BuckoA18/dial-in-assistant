import Input from "../ui/Input";
import Textarea from "../ui/Textarea";
import WheelPicker from "./WheelPicker";
import Grid from "./Grid";
import GridItem from "./GridItem";

import CustomOption from "./CustomOption";
import CustomSingleValue from "./CustomSingleValue";
import TasteRangeInput from "./TasteRangeInput";
import Label from "./Label";
import CoffeeProfile from "./CoffeeProfile";
import GrinderHistory from "./CustomSelect";
import FloatingInput from "./FloatingInput";
import YieldVisualizer from "./YieldVisualizer";
import ShotDetails from "./ShotDetails";

import CustomSelect from "./CustomSelect";
import { coffee } from "@lucide/lab";
import { Coffee } from "lucide-react";
const coffeeInventory = [
  {
    id: 0,
    name: "Yirgacheffe Gedeb",
    roaster: "Solar Flare Coffee",
    origin: "Ethiopia",
    countryCode: "ET",
    method: "Natural",
    roastLevel: 2,
    altitude: "2100",
    variety: "Heirloom",
    notes: ["Blueberry", "Earl Grey", "Lemon Zest"],
    intensity: { acidity: 5, body: 2, sweetness: 4 },
  },
  {
    id: 1,
    name: "Huila Reserva",
    roaster: "Mountain Peak Roasts",
    origin: "Colombia",
    countryCode: "CO",
    method: "Washed",
    roastLevel: 3,
    altitude: "1750",
    variety: "Caturra",
    notes: ["Caramel", "Red Apple", "Milk Chocolate"],
    intensity: { acidity: 3, body: 3, sweetness: 4 },
  },
  {
    id: 2,

    name: "Mandheling Gayo",
    roaster: "Deep Earth Beans",
    origin: "Indonesia",
    countryCode: "ID",
    method: "Giling Basah",
    roastLevel: 5,
    altitude: "1200",
    variety: "Typica",
    notes: ["Cedar", "Tobacco", "Dark Cocoa"],
    intensity: { acidity: 1, body: 5, sweetness: 2 },
  },
  {
    id: 3,
    name: "Nyeri Hill",
    roaster: "Velvet Drip",
    origin: "Kenya",
    countryCode: "KE",
    method: "Washed",
    roastLevel: 2,
    altitude: "1900",
    variety: "SL-28",
    notes: ["Blackcurrant", "Grapefruit", "Tomato"],
    intensity: { acidity: 5, body: 3, sweetness: 3 },
  },
  {
    id: 4,
    name: "Tarrazu Honey",
    roaster: "Golden Hour Roastery",
    origin: "Costa Rica",
    countryCode: "CR",
    method: "Honey",
    roastLevel: 3,
    altitude: "1500",
    variety: "Catuai",
    notes: ["Honey", "Molasses", "Stone Fruit"],
    intensity: { acidity: 2, body: 4, sweetness: 5 },
  },
];

const grindHistory = [
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
  {
    id: 4,
    setting: 25,
    date: "May 3, 2026",
    note: "Really watery and acidic, need to go a lot finer",
  },
];

const StepFormContent = ({ currentStep }) => {
  if (currentStep === 1)
    return (
      <div className="flex grow flex-col gap-2 px-2 sm:max-w-lg sm:items-center sm:gap-4 sm:px-8">
        <CustomSelect
          options={coffeeInventory}
          optionComponent={CoffeeProfile}
        />
      </div>
    );
  if (currentStep === 2)
    return (
      <div className="animate-in fade-in flex grow flex-col items-center justify-between px-2">
        <CustomSelect options={grindHistory} />
        <WheelPicker min={1} max={50} />
      </div>
    );
  if (currentStep === 3)
    return (
      <div className="animate-in fade-in flex grow flex-col gap-4 px-2">
        <ShotDetails />
      </div>
    );

  if (currentStep === 4)
    return (
      <div className="animate-in fade-in h-full px-2">
        <TasteRangeInput />
      </div>
    );
};

export default StepFormContent;
