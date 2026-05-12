import React from "react";
import CardOption from "./CardOption";
import Grid from "./Grid";
import Detail from "./Detail";
import Badge from "./Badge";

const GrindProfile = ({ data, isSelected, isLatest }) => {
  const { id, description, grindSetting, date, dose, coffeeYield, time } = data;

  return (
    <div className={`flex flex-col`}>
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold text-stone-800">
          {grindSetting} Clicks
        </h3>
        <time className="text-xs font-medium text-stone-400">{date}</time>
      </div>
      <p className="text-sm font-medium text-stone-500 italic">{description}</p>

      {isSelected && (
        <>
          {isLatest && (
            <div className="my-2 flex flex-wrap">
              <Badge styles="bg-green-200 border-green-300">Latest</Badge>
            </div>
          )}
          <Grid type="details">
            <Detail label="Dose" value={dose} />
            <Detail label="Coffee Out" value={coffeeYield} />
            <Detail label="Extraction time" value={time} />
          </Grid>
        </>
      )}
    </div>
  );
};

export default GrindProfile;
