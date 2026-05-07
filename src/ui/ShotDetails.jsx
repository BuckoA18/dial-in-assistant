import React, { useState } from "react";
import FloatingInput from "./FloatingInput";
import YieldVisualizer from "./YieldVisualizer";

const ShotDetails = () => {
  const [dose, setDose] = useState(null);
  const [coffeeOut, setCoffeeOut] = useState(null);
  const [extractionTime, setExtractionTime] = useState(null);

  return (
    <>
      <FloatingInput
        label="Dose"
        prevValue={18}
        unit="g"
        value={dose}
        onChange={(e) => setDose(e.target.value)}
      />
      <FloatingInput
        label="Coffee out"
        prevValue={35}
        unit="g"
        value={coffeeOut}
        onChange={(e) => setCoffeeOut(e.target.value)}
      />
      <FloatingInput
        label="Extraction time"
        prevValue={45}
        unit="g"
        value={extractionTime}
        onChange={(e) => setExtractionTime(e.target.value)}
      />

      {dose && coffeeOut && extractionTime && (
        <YieldVisualizer dose={dose} coffeeOut={coffeeOut} />
      )}
    </>
  );
};

export default ShotDetails;
