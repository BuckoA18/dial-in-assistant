import Input from "../ui/Input";
import Textarea from "../ui/Textarea";
import WheelPicker from "./WheelPicker";
import Grid from "./Grid";
import GridItem from "./GridItem";
import TasteRangeInput from "./TasteRangeInput";
import Label from "./Label";
import CoffeeProfile from "./CoffeeProfile";
import GrindProfile from "./GrindProfile";
import FloatingInput from "./FloatingInput";
import YieldVisualizer from "./YieldVisualizer";
import ShotDetails from "./ShotDetails";
import CardSelect from "./CardSelect";

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
  {
    id: 5,
    name: "Esmeralda Geisha",
    roaster: "Apex Roasts",
    origin: "Panama",
    countryCode: "PA",
    method: "Washed",
    roastLevel: 1,
    altitude: "1850",
    variety: "Geisha",
    notes: ["Jasmine", "Bergamot", "White Peach"],
    intensity: { acidity: 5, body: 1, sweetness: 5 },
  },
  {
    id: 6,
    name: "Antigua Pastoral",
    roaster: "Volcanica Beans",
    origin: "Guatemala",
    countryCode: "GT",
    method: "Washed",
    roastLevel: 3,
    altitude: "1650",
    variety: "Bourbon",
    notes: ["Milk Chocolate", "Brown Sugar", "Green Apple"],
    intensity: { acidity: 3, body: 3, sweetness: 4 },
  },
  {
    id: 7,
    name: "Dalat Bourbon",
    roaster: "Lotus Coffee Co.",
    origin: "Vietnam",
    countryCode: "VN",
    method: "Natural",
    roastLevel: 4,
    altitude: "1500",
    variety: "Catimor",
    notes: ["Dried Fig", "Roasted Peanut", "Dark Caramel"],
    intensity: { acidity: 2, body: 4, sweetness: 3 },
  },
  {
    id: 8,
    name: "Inzovu",
    roaster: "Thousand Hills",
    origin: "Rwanda",
    countryCode: "RW",
    method: "Fully Washed",
    roastLevel: 2,
    altitude: "1900",
    variety: "Red Bourbon",
    notes: ["Cranberry", "Orange Peel", "Black Tea"],
    intensity: { acidity: 4, body: 2, sweetness: 3 },
  },
  {
    id: 9,
    name: "Cajamarca Organic",
    roaster: "Andes Peak",
    origin: "Peru",
    countryCode: "PE",
    method: "Washed",
    roastLevel: 3,
    altitude: "1700",
    variety: "Caturra",
    notes: ["Toffee", "Red Currant", "Nougat"],
    intensity: { acidity: 3, body: 4, sweetness: 4 },
  },
];

const grindHistory = [
  {
    id: 1,
    grindSetting: 18,
    date: "May 5, 2026",
    note: "Perfect balance, very sweet finish.",
    dose: 18,
    coffeeYield: 36,
    time: 26,
  },

  {
    id: 2,
    grindSetting: 20,
    date: "May 4, 2026",
    note: "A bit watery, need to go bit finer.",
    dose: 18,
    coffeeYield: 35,
    time: 15,
  },
  {
    id: 3,
    grindSetting: 25,
    date: "May 3, 2026",
    note: "Really watery and acidic, need to go a lot finer",
    dose: 18,
    coffeeYield: 38,
    time: 13,
  },
  {
    id: 4,
    grindSetting: 25,
    date: "May 3, 2026",
    note: "Really watery and acidic, need to go a lot finer",
    dose: 18,
    coffeeYield: 36,
    time: 10,
  },
];

const StepFormContent = ({ currentStep }) => {
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
