import React from "react";

const TasteFeedbackProfile = ({ data, isSelected }) => {
  const { label, description, sliderLabels, notes } = data;

  return (
    <div className="">
      <div>
        <h3 className="text-lg font-semibold">{label}</h3>
        <p className="text-sm italic">{description}</p>
      </div>

      {isSelected && <div></div>}
    </div>
  );
};

export default TasteFeedbackProfile;
