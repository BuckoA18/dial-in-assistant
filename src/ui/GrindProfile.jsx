import React from "react";
import Grid from "./Grid";
import Detail from "./Detail";
import Badge from "./Badge";

const GrindProfile = ({ data, isSelected, isLatest }) => {
  const {
    id,
    created_at: date,
    grinder_setting: grinderSetting,
    dose,
    yield: coffeeYield,
    extraction_time,
  } = data;

  return (
    <div className={`flex flex-col`}>
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold text-stone-800">
          {grinderSetting} Clicks
        </h3>
        <time className="text-xs font-medium text-stone-400">{date}</time>
      </div>

      {isSelected && (
        <>
          {isLatest && (
            <div className="my-2 flex flex-wrap">
              <Badge styles="bg-green-200 border-green-300">Latest</Badge>
            </div>
          )}
          <Grid type="details">
            <Detail label="Dose">{dose}</Detail>
            <Detail label="Coffee Out">{coffeeYield}</Detail>
            <Detail label="Extraction time">{extraction_time}</Detail>
          </Grid>
        </>
      )}
    </div>
  );
};

export default GrindProfile;
