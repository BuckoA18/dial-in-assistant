import { Slider } from "radix-ui";

const RangeSlider = ({ setValue, value }) => {
  console.log("Range Slider Value: ", value);
  return (
    <Slider.Root
      orientation="vertical"
      className="relative flex h-98 touch-none items-center select-none data-[orientation=vertical]:flex-col"
      max={100}
      step={1}
      onChange={(e) => setValue(e.target.value)}
    >
      <Slider.Track className="relative grow rounded-full bg-stone-400 data-[orientation=vertical]:w-2">
        {/* <Slider.Range className="absolute h-6 bg-amber-700 data-[orientation=vertical]:w-6" /> */}
      </Slider.Track>
      <Slider.Thumb
        className="block size-8 rounded-full bg-gray-200"
        aria-label="Taste"
      />
    </Slider.Root>
  );
};

export default RangeSlider;
