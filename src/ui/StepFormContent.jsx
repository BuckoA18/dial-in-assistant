import Select from "../ui/Select";
import Input from "../ui/Input";
import RangeInput from "../ui/RangeInput";
import Textarea from "../ui/Textarea";

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
      <>
        <Input label="Grind setting" id="grindSetting" />
        <Input label="Coffee in (g)" id="coffeeIn" />
        <Input label="Coffee out (g)" id="coffeeOut" />
        <Input label="Time of extraction (s)" id="extractionTime" />
      </>
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
