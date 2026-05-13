import React from "react";
import TasteSlider from "./TasteSlider";
import Badge from "./Badge";
import Label from "./Label";

const TasteFeedbackProfile = ({ data, isSelected }) => {
  const { label, description, sliderLabels, notes, icon: Icon } = data;

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-2">
        <Icon size={24} />
        <span>
          <h3 className="text-lg font-semibold">{label}</h3>
          <p className="text-sm italic">{description}</p>
        </span>
      </div>

      {isSelected && (
        <>
          <TasteSlider sliderLabels={sliderLabels} />
          <div>
            <p className="mb-2 text-xs font-semibold text-stone-400 uppercase">
              Any specific notes?
            </p>
            <div className="flex flex-wrap justify-start gap-2">
              {notes.map((note) => (
                <Badge key={note}>{note}</Badge>
              ))}
            </div>
          </div>
          <textarea
            placeholder="Add custom tasting notes..."
            className="w-full rounded-xl border border-stone-200 p-3 text-sm outline-none focus:ring-2 focus:ring-stone-200"
            rows={2}
          />
        </>
      )}
    </div>
  );
};

export default TasteFeedbackProfile;
