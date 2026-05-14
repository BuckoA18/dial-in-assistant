import { useShots } from "../../hooks/useShots";
import CardSelect from "../../ui/CardSelect";
import GrindProfile from "../../ui/GrindProfile";
import WheelPicker from "../../ui/WheelPicker";

const GrinderStep = () => {
  const { data: shots, error, isLoading } = useShots();

  if (isLoading) return <p>Loading...</p>;
  return (
    <>
      <CardSelect
        key="grind-select"
        options={shots}
        optionComponent={GrindProfile}
        styles="max-h-72"
        defaultValue={shots[0]}
      />
      <span className="sm:hidden">
        <WheelPicker min={1} max={50} />
      </span>
    </>
  );
};

export default GrinderStep;
