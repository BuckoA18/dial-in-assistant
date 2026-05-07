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
import FloatingInput from "./FloatingInput";
import YieldVisualizer from "./YieldVisualizer";
import ShotDetails from "./ShotDetails";
import CoffeeSelect from "./CoffeeSelect";

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
      <div className="flex grow flex-col items-center gap-2 px-2">
        <CoffeeSelect />
      </div>
    );
  if (currentStep === 2)
    return (
      <div className="animate-in fade-in flex grow flex-col items-center justify-between px-2">
        <GrinderHistory history={historyData} />
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
