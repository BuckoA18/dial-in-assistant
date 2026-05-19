import { useState } from "react";
import { useShots } from "../../../hooks/useShots";
import GrindProfile from "../../../ui/GrindProfile";
import WheelPicker from "../../../ui/WheelPicker";
import ShotItem from "./ShotItem";
import ShotDetails from "./ShotDetails";

const GrinderStep = () => {
  const { data: shots, error, isLoading } = useShots();
  const [activeShot, setActiveShot] = useState(null);

  console.log(shots);

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <div className="grow sm:hidden">
        {activeShot && <ShotDetails data={activeShot} />}
        {!activeShot && (
          <ul className="flex h-full max-w-xl flex-col justify-center gap-2">
            {shots?.map((bean) => (
              <ShotItem data={bean} key={bean.id} />
            ))}
          </ul>
        )}
      </div>

      <div className="hidden max-w-2xl grow justify-center gap-6 sm:flex">
        <ul className="flex h-full max-w-xl flex-col justify-center gap-1">
          {shots?.map((coffee) => (
            <ShotItem
              data={coffee}
              key={coffee.id}
              isOpen={activeShot?.id === coffee.id}
            />
          ))}
        </ul>
        {activeShot && <div className="my-8 w-px bg-stone-200"></div>}
        {activeShot && <ShotDetails data={activeShot} />}
      </div>
    </>
  );
};

export default GrinderStep;
