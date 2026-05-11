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

const CustomSelect = ({ options, optionComponent: OptionComponent }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [isOptionOpen, setisOptionOpen] = useState(false);

  console.log(isOptionOpen);
  console.log("Selected option: ", selectedOption);

  const handleSelectOption = (id) => {
    const currentOption = options.find((option) => option.id === id);
    setSelectedOption(currentOption);
    setisOptionOpen(true);
  };

  const handleOpenSelect = () => {
    setSelectedOption(null);
    setisOptionOpen(true);
  };
  return (
    <div
      className={`animate-in fade-in no-scrollbar relative flex w-full max-w-md flex-col gap-2 ${isOptionOpen ? "overflow-scroll " : "overflow-hidden "} rounded-2xl`}
    >
      {options.map((option) => (
        <OptionComponent
          data={option}
          onSelect={handleSelectOption}
          isOpen={selectedOption.id === option.id}
          key={option.id}
        />
      ))}
      {isOptionOpen && (
        <Button
          styles=" absolute bottom-2 left-1/2 z-9 -translate-x-1/2 bg-stone-100 shadow-md text-stone-600"
          type="icon"
          onClick={handleOpenSelect}
        >
          <ArrowDown size={18} />
        </Button>
      )}
    </div>
  );
};

// const SelectItem = ({ entry, isLatest, isOpen, onClick }) => {
//   const { setting, date = "N/A", note = "" } = entry;

//   return (
//     <div
//       className="flex flex-col gap-1 rounded-2xl border-2 border-stone-200 p-4 shadow-sm"
//       onClick={onClick}
//     >
//       <div className="flex items-center justify-between">
//         <div className="flex items-center gap-2">
//           <span className="text-lg font-bold text-stone-800">
//             {setting} clicks
//           </span>
//           {isLatest && (
//             <Badge styles="bg-green-200 border-green-300">Latest</Badge>
//           )}
//         </div>
//         <Time>{date}</Time>
//       </div>
//       {note && <Note>{note}</Note>}
//       {isOpen && (
//         <Grid type="details">
//           <Detail label="Coffee in" value={18} />
//           <Detail label="Coffee out" value={36} />
//           <Detail label="Extraction time" value={24} />
//         </Grid>
//       )}
//     </div>
//   );
// };

export default CustomSelect;

const Note = ({ children }) => {
  return (
    <p className="mt-1 line-clamp-2 text-sm text-stone-500 italic">
      {children}
    </p>
  );
};

const Time = ({ children }) => {
  return <time className="text-xs text-stone-400">{children}</time>;
};
