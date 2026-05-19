import React from "react";
import Badge from "../../../ui/Badge";
import Grid from "../../../ui/Grid";
import Detail from "../../../ui/Detail";

const ShotDetails = ({ data }) => {
  const { yield, dose, time, tasteBadges, date, description, grinderSetting } =
    data;
  return (
    <div className="flex grow flex-col gap-4 p-2">
      <div>
        <span className="flex items-center justify-between">
          <h3 className="text-2xl font-bold text-stone-800">23 Clicks</h3>
          <time className="text-sm text-stone-400">24.5.2025</time>
        </span>
        <p className="text-sm font-medium text-stone-500 italic">
          First shot.. need to go a lot finer
        </p>
      </div>

      <Grid type="details">
        <Detail label="dose">18g</Detail>
        <Detail label="yield">39g</Detail>
        <Detail label="extraction time">18s</Detail>
      </Grid>

      <div>
        <div className="flex flex-wrap gap-1">
          <Badge>First time</Badge>
          <Badge>Acidic</Badge>
          <Badge>Quick extraction</Badge>
        </div>
      </div>
    </div>
  );
};

export default ShotDetails;
