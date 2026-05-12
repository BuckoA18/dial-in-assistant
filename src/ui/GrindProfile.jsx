import React from "react";
import CardOption from "./CardOption";
import Grid from "./Grid";
import Detail from "./Detail";

const GrindProfile = ({ data, isSelected }) => {
  const { id, note, grindSetting, date, dose, coffeeYield, time } = data;

  return (
    <>
      <div>
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-stone-800">
            {grindSetting} Clicks
          </h2>
          <time className="text-xs font-medium text-stone-400">{date}</time>
        </div>
        <p className="text-sm font-medium text-stone-500 italic">{note}</p>

        {isSelected && (
          <Grid type="details">
            <Detail label="Dose" value={dose} />
            <Detail label="Coffee Out" value={coffeeYield} />
            <Detail label="Extraction time" value={time} />
          </Grid>
        )}
      </div>
    </>
  );
};

export default GrindProfile;
