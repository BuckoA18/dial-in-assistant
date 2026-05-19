import React from "react";

const ShotItem = ({ data }) => {
  const {
    created_at: date,
    grinder_setting: grinderSetting,
    id,
    isOpen,
  } = data;
  console.log(date, grinderSetting);
  return (
    <li className="relative flex flex-col gap-4 rounded-xl border border-stone-200 p-4 transition-colors sm:w-2xs">
      <span className="flex justify-between">
        <h3 className="text-2xl font-bold text-stone-800">
          {grinderSetting} Clicks
        </h3>
        <time className="text-sm text-stone-400">24.5.2025</time>
      </span>
      <p></p>
    </li>
  );
};

export default ShotItem;
