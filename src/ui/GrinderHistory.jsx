import { useState } from "react";
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

const GrinderHistory = ({ history = {} }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);

  console.log(isHistoryOpen);
  console.log(activeIndex);

  const displayList = isHistoryOpen
    ? history
    : history.filter((_, i) => i === activeIndex);

  const handleSelectItem = (index) => {
    setActiveIndex(index);
    setIsHistoryOpen(false);
  };

  const handlOpenHistory = () => {
    setActiveIndex(null);
    setIsHistoryOpen(true);
  };
  return (
    <div
      className={`animate-in fade-in no-scrollbar relative flex max-h-68 w-full max-w-md flex-col gap-2 ${isHistoryOpen ? "overflow-scroll mask-b-from-50" : "overflow-hidden "} rounded-2xl`}
    >
      {displayList.length > 0 ? (
        displayList.map((entry, index) => {
          const realIndex = isHistoryOpen ? index : activeIndex;
          return (
            <HistoryItem
              key={entry.id}
              entry={entry}
              isLatest={realIndex === 0}
              isOpen={activeIndex === realIndex}
              index={index}
              onClick={() => handleSelectItem(realIndex)}
            />
          );
        })
      ) : (
        <p className="text-sm font-semibold text-stone-400">
          No previus grind settings...
        </p>
      )}
      {!isHistoryOpen && (
        <Button
          styles=" absolute bottom-2 left-1/2 z-9 -translate-x-1/2 bg-stone-100 shadow-md text-stone-600"
          type="icon"
          onClick={handlOpenHistory}
        >
          <ArrowDown size={18} />
        </Button>
      )}
    </div>
  );
};

const HistoryItem = ({ entry, isLatest, isOpen, onClick }) => {
  const { setting, date = "N/A", note = "" } = entry;

  return (
    <div
      className="flex flex-col gap-1 rounded-2xl border-2 border-stone-200 p-4 shadow-sm"
      onClick={onClick}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-stone-800">
            {setting} clicks
          </span>
          {isLatest && (
            <Badge styles="bg-green-200 border-green-300">Latest</Badge>
          )}
        </div>
        <Time>{date}</Time>
      </div>
      {note && <Note>{note}</Note>}
      {isOpen && (
        <Grid type="details">
          <Detail label="Coffee in" value={18} />
          <Detail label="Coffee out" value={36} />
          <Detail label="Extraction time" value={24} />
        </Grid>
      )}
    </div>
  );
};

export default GrinderHistory;

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
