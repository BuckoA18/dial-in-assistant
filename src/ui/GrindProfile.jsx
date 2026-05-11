import React from "react";
import CardOption from "./CardOption";
import Grid from "./Grid";
import Detail from "./Detail";

const GrindProfile = ({ data, isSelected, onSelect, onToggleOpen, isOpen }) => {
  const { id, note, grindSetting, date, dose, coffeeYield, time } = data;

  return (
    <CardOption
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onSelect(id);
      }}
      onToggleOpen={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onToggleOpen(id);
      }}
      isOpen={isOpen}
      isSelected={isSelected}
    >
      <>
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-stone-800">
            {grindSetting} Clicks
          </h2>
          <time className="text-xs font-medium text-stone-400">{date}</time>
        </div>
        <p className="text-sm font-medium text-stone-500 italic">{note}</p>

        {isOpen && (
          <Grid type="details">
            <Detail label="Dose" value={dose} />
            <Detail label="Coffee Out" value={coffeeYield} />
            <Detail label="Extraction time" value={time} />
          </Grid>
        )}
      </>
    </CardOption>
  );
};

export default GrindProfile;
