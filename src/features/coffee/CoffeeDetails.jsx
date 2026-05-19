import React from "react";
import Button from "../../ui/Button";
import RoastLevel from "../../ui/RoastLevel";
import Grid from "../../ui/Grid";
import Detail from "../../ui/Detail";
import Badge from "../../ui/Badge";
import { ChevronDown } from "lucide-react";
import { increment } from "../stepForm/stepFormSlice";
import { useDispatch } from "react-redux";

const CoffeeDetails = ({ data, onClose }) => {
  const dispatch = useDispatch();
  const {
    id,
    name = "Unknown",
    roaster = "",
    origin = "Unknown",
    countryCode = "BR",
    method = "N/A",
    roastLevel = 1,
    altitude = "N/A",
    variety = "N/A",
    notes = [],
  } = data || {};

  return (
    <div
      className={`animate-in slide-in-from-right-10 relative flex h-full grow flex-col gap-4 border-none p-4 shadow-none transition-colors sm:w-xs`}
    >
      <Button
        type="icon"
        styles={`absolute right-0 z-99 sm:hidden `}
        onClick={() => onClose()}
      >
        <ChevronDown />
      </Button>
      <CoffeeProfileHeading
        countryCode={countryCode}
        roaster={roaster}
        name={name}
      />

      <div className="flex grow flex-col gap-4">
        <RoastLevel roastLevel={roastLevel} />

        <Grid type="details">
          <Detail label="Origin">{origin}</Detail>
          <Detail label="Method">{method}</Detail>
          <Detail label="Altitude">{`${altitude} m.a.s.l.`}</Detail>
          <Detail label="Variety">{variety}</Detail>
        </Grid>

        <div>
          <p className="mb-2 text-xs font-bold tracking-wider text-stone-400 uppercase">
            Tasting Notes
          </p>
          <div className="flex flex-wrap gap-1 sm:max-w-80 sm:gap-2">
            {notes.map((note) => (
              <Badge
                styles="border-orange-200 bg-orange-100 text-stone-800"
                key={note}
              >
                {note}
              </Badge>
            ))}
          </div>
        </div>

        <Button
          type="primary"
          styles="mt-auto"
          onClick={(e) => {
            e.preventDefault();
            dispatch(increment());
          }}
        >
          Set as active
        </Button>
      </div>
    </div>
  );
};

const CoffeeProfileHeading = ({ countryCode, roaster, name }) => {
  return (
    <div className="relative">
      <div className="flex items-center gap-2">
        {countryCode && <CountryFlag countryCode={countryCode} />}
        <h2 className="text-2xl font-bold text-stone-800">{name}</h2>
      </div>
      <p className="text-sm font-medium text-stone-500 italic">{roaster}</p>
    </div>
  );
};

const CountryFlag = ({ countryCode }) => {
  return (
    <img
      src={`https://flagsapi.com/${countryCode}/flat/32.png`}
      alt="country"
      className=""
    />
  );
};

export default CoffeeDetails;
