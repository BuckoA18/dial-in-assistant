import Input from "../ui/Input";
import RangeInput from "../ui/RangeInput";
import Textarea from "../ui/Textarea";
import WheelPicker from "./WheelPicker";
import Grid from "./Grid";
import GridItem from "./GridItem";
import Select from "react-select";
import { components } from "react-select";
const beanOptions = [
  { label: "Brasil", value: "Brasil", img: "imageBR" },
  { label: "Ethiopie", value: "Ethiopie", img: "imageET" },
  { label: "India", value: "India", img: "imageIn" },
];

const CustomOption = (props) => {
  return (
    <components.Option {...props}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span style={{ fontWeight: "bold", color: "blue" }}>
          {props.data.img}
        </span>
        <p style={{ margin: 0, fontSize: "12px", color: "#666" }}>
          {props.data.label}
        </p>
      </div>
    </components.Option>
  );
};

const StepFormContent = ({ currentStep }) => {
  if (currentStep === 1)
    return (
      <div className="flex flex-col gap-4">
        <Select options={beanOptions} components={{ Option: CustomOption }} />
      </div>
    );

  if (currentStep === 2)
    return (
      <div className="flex grow flex-col gap-4">
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

        <span className="">
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
