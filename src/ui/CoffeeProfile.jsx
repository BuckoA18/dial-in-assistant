import { ArrowDown, ChevronDown, Maximize2 } from "lucide-react";
import RoastLevel from "./RoastLevel";
import Grid from "./Grid";
import Detail from "./Detail";
import Badge from "./Badge";
import Button from "./Button";
import CardOption from "./CardOption";

const CoffeeProfile = ({ data, isSelected }) => {
  const {
    id,
    name = "Unknown",
    roaster = "",
    origin = "Unknown",
    countryCode = "",
    method = "N/A",
    roastLevel = 1,
    altitude = "N/A",
    variety = "N/A",
    notes = [],
  } = data || {};

  return (
    <div className="flex flex-col gap-4">
      <CoffeeProfileHeading
        countryCode={countryCode}
        roaster={roaster}
        name={name}
      />

      {isSelected && (
        <div className="flex flex-col gap-4">
          <RoastLevel roastLevel={roastLevel} />

          <Grid type="details">
            <Detail label="Origin">{origin}</Detail>
            <Detail label="Method">{method}</Detail>
            <Detail label="Altitude">{`${altitude} m.a.s.l.`}</Detail>
            <Detail label="Variety">{variety}</Detail>
          </Grid>

          {notes.length > 0 && (
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
          )}
        </div>
      )}
    </div>
  );
};

export default CoffeeProfile;

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
