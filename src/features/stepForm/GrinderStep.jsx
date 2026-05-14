import { useShots } from "../../hooks/useShots";
import GrindProfile from "../../ui/GrindProfile";
import WheelPicker from "../../ui/WheelPicker";

const GrinderStep = () => {
  const { data: shots, error, isLoading } = useShots();

  if (isLoading) return <p>Loading...</p>;
  return (
    <>
      <span className="sm:hidden">
        <WheelPicker min={1} max={50} />
      </span>
    </>
  );
};

export default GrinderStep;
