import { Component, useState } from "react";
import {
  Calendar,
  Coffee,
  ChevronRight,
  ArrowDown,
  Hand,
  HandPlatter,
} from "lucide-react";
import Detail from "./Detail";
import Grid from "./Grid";
import Button from "./Button";
import Badge from "./Badge";
import CardOption from "./CardOption";

const CardSelect = ({
  options,
  optionComponent: OptionComponent,
  defaultValue,
  styles,
}) => {
  const [selectedOption, setSelectedOption] = useState(defaultValue);

  console.log("Selected option: ", selectedOption);

  const handleSelectOption = (id) => {
    if (selectedOption?.id === id) return;
    setSelectedOption(options.find((option) => option.id === id));
  };
  const handleCloseOption = () => {
    setSelectedOption(null);
  };

  return (
    <div
      className={`animate-in fade-in no-scrollbar relative flex w-full grow flex-col gap-2 overflow-auto ${styles}`}
    >
      {selectedOption ? (
        <CardOption
          onSelect={(e) => {
            e.preventDefault();
            handleSelectOption(selectedOption.id);
          }}
          isSelected={selectedOption?.id === selectedOption.id}
          onClose={handleCloseOption}
        >
          <OptionComponent
            data={selectedOption}
            isSelected={true}
            onClose={handleCloseOption}
          />
        </CardOption>
      ) : (
        options.map((option) => (
          <CardOption
            key={option.id}
            onSelect={(e) => {
              e.preventDefault();
              handleSelectOption(option.id);
            }}
            isSelected={selectedOption?.id === option.id}
          >
            <OptionComponent data={option} />
          </CardOption>
        ))
      )}
    </div>
  );
};

export default CardSelect;
