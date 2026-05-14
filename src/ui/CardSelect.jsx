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
  createOptionComponent: CreateOptionComponent,
}) => {
  const [selectedOption, setSelectedOption] = useState(defaultValue);

  const handleSelectOption = (id) => {
    if (selectedOption?.id === id) return;
    setSelectedOption(options.find((option) => option.id === id));
  };
  const handleCloseOption = () => {
    setSelectedOption(null);
  };

  return (
    <div
      className={`animate-in fade-in no-scrollbar relative flex w-full flex-col gap-2 overflow-scroll sm:flex-row sm:justify-center sm:gap-6 sm:px-4 ${styles}`}
    >
      {selectedOption ? (
        <>
          <CardOption
            type="lg"
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
          <div className="my-8 hidden w-px bg-stone-200 sm:block" />
          <div className="sm:no-scrollbar hidden gap-2 py-5 sm:flex sm:flex-col sm:overflow-scroll sm:mask-y-from-95">
            {options.map((option) => (
              <CardOption
                type="sm"
                key={option.id}
                onSelect={(e) => {
                  e.preventDefault();
                  handleSelectOption(option.id);
                }}
                isSelected={selectedOption?.id === option.id}
                isClosed={true}
              >
                <OptionComponent data={option} />
              </CardOption>
            ))}
            {CreateOptionComponent && (
              <CardOption type="sm">
                <CreateOptionComponent />
              </CardOption>
            )}
          </div>
        </>
      ) : (
        <div className="flex flex-col gap-2">
          {options.map((option) => (
            <CardOption
              type="sm"
              key={option.id}
              onSelect={(e) => {
                e.preventDefault();
                handleSelectOption(option.id);
              }}
              isSelected={selectedOption?.id === option.id}
            >
              <OptionComponent data={option} />
            </CardOption>
          ))}
          {CreateOptionComponent && (
            <CardOption type="sm">
              <CreateOptionComponent />
            </CardOption>
          )}
        </div>
      )}
    </div>
  );
};

export default CardSelect;
