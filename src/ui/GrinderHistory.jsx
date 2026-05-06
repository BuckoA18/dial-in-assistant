import { useState } from "react";
import {
  Calendar,
  Coffee,
  ChevronRight,
  ArrowUp,
  Hand,
  HandPlatter,
} from "lucide-react";
import Detail from "./Detail";
import Grid from "./Grid";
import Button from "./Button";

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
      className={`no-scrollbar relative flex max-h-62 w-full max-w-md flex-col gap-4 ${isHistoryOpen ? "overflow-scroll mask-b-from-50" : "overflow-hidden "} rounded-2xl bg-white px-4 py-2`}
    >
      <div className="flex flex-col gap-2">
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
      </div>
      {!isHistoryOpen && (
        <button
          onClick={handlOpenHistory}
          className="absolute bottom-3 left-1/2 z-9 flex size-8 -translate-x-1/2 items-center justify-center rounded-full bg-stone-200 opacity-50"
        >
          <ArrowUp size={18} />
        </button>
      )}
    </div>
  );
};

const HistoryItem = ({ entry, isLatest, isOpen, onClick }) => {
  const { setting, date = "N/A", note = "" } = entry;

  console.log("isOpen", isOpen);

  return (
    <div
      className="flex flex-col gap-1 rounded-2xl border p-4 shadow-sm"
      onClick={onClick}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-stone-800">
            {setting} clicks
          </span>
          {isLatest && (
            <span className="rounded-full border border-amber-800 bg-amber-100 px-2 py-1 text-xs font-bold text-amber-800">
              Latest
            </span>
          )}
        </div>
        <span className="text-xs text-stone-400">{date}</span>
      </div>

      {note && (
        <p className="mt-1 line-clamp-2 text-sm text-stone-500 italic">
          {note}
        </p>
      )}
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
