import { useState } from "react";
import { useShots } from "../../../hooks/useShots";
import GrindProfile from "../../../ui/GrindProfile";
import WheelPicker from "../../../ui/WheelPicker";
import ShotItem from "./ShotItem";
import ShotDetails from "./ShotDetails";
import Button from "../../../ui/Button";
import { useDispatch } from "react-redux";
import { increment } from "../stepFormSlice";
import Input from "../../../ui/Input";

const GrinderStep = () => {
  const { data: shots, error, isLoading } = useShots();
  const dispatch = useDispatch();
  console.log(shots);

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <div className="flex h-full flex-col sm:hidden">
        <ShotDetails />
        <span className="flex flex-col gap-2">
          <Input placeholder="Your current grinder setting" />
          <Button
            type="primary"
            onClick={(e) => {
              e.preventDefault();
              dispatch(increment());
            }}
          >
            Next step
          </Button>
        </span>
      </div>

      <div className="hidden max-w-2xl grow justify-center gap-6 sm:flex">
        {shots.length > 0 && (
          <ul className="flex flex-col justify-center gap-1">
            {shots.map((shot) => (
              <ShotItem key={shot.id} data={shot} />
            ))}
          </ul>
        )}

        <div className="flex flex-col gap-8">
          <ShotDetails />

          <span className="flex flex-col gap-2">
            <Input placeholder="Your current grinder setting" />
            <Button
              type="primary"
              onClick={(e) => {
                e.preventDefault();
                dispatch(increment());
              }}
            >
              Next step
            </Button>
          </span>
        </div>
      </div>
    </>
  );
};

export default GrinderStep;
