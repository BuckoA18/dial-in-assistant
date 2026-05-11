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

const CardSelect = ({ options, optionComponent: OptionComponent, styles }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [openedOption, setOpenedOption] = useState(null);
  const isOptionOpen = openedOption !== null;

  console.log("Selected option: ", selectedOption);

  const handleSelectOption = (id) => {
    setSelectedOption(
      selectedOption?.id === id
        ? null
        : options.find((option) => option.id === id),
    );
  };
  const handleToggleOption = (id) => {
    setOpenedOption(
      openedOption?.id === id
        ? null
        : options.find((option) => option.id === id),
    );
  };

  return (
    <div
      className={`animate-in fade-in no-scrollbar relative flex w-full grow flex-col gap-2 overflow-auto ${styles}`}
    >
      {isOptionOpen ? (
        <OptionComponent
          data={openedOption}
          onSelect={handleSelectOption}
          isSelected={selectedOption?.id === openedOption.id}
          isOpen={isOptionOpen}
          key={openedOption.id}
          onToggleOpen={handleToggleOption}
        />
      ) : (
        options.map((option) => (
          <OptionComponent
            data={option}
            onToggleOpen={handleToggleOption}
            onSelect={handleSelectOption}
            isSelected={selectedOption?.id === option.id}
            key={option.id}
          />
        ))
      )}
    </div>
  );
};

export default CardSelect;
