import React, { useState } from "react";
import Select from "./Select";
import Label from "./Label";
import CoffeeProfile from "./CoffeeProfile";

const testCoffee = {
  name: "Brasil Santos",
  roaster: "Caffee Montana",
  origin: "Brasil",
  countryCode: "BR",
  method: "Washed",
  roastLevel: 4,
  altitude: "1600",
  variety: "N/A",
  notes: ["Dark chocolate", "Almods", "Hazelnuts"],
  intensity: { acidity: 3, body: 4, sweetness: 2 },
};

const beanOptions = [
  { label: "Brasil", value: "brasil", countryCode: "BR" },
  { label: "Ethiopie", value: "ethiopie", countryCode: "ET" },
  { label: "India", value: "india", countryCode: "IN" },
];

const CoffeeSelect = () => {
  const [selectedCoffee, setSelectedCoffee] = useState(beanOptions[0]);

  return (
    <>
      <span className="flex w-full flex-col sm:flex-row">
        {/* <Label forId="bean">On the grinder</Label> */}
        <Select id="bean">
          {beanOptions.map((option) => (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
      </span>

      <CoffeeProfile coffee={testCoffee} />
    </>
  );
};

export default CoffeeSelect;
