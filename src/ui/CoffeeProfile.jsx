import { Maximize2 } from "lucide-react";
import CoffeeDetail from "./CoffeeDetail";
import Grid from "./Grid";
import Detail from "./Detail";
import Badge from "./Badge";

const CoffeeProfile = ({ data, onSelect }) => {
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
    <div
      className={`animate-in fade-in relative flex max-w-md grow flex-col gap-6 rounded-xl border-2 border-stone-200 p-4 shadow-sm`}
      onClick={() => onSelect(id)}
    >
      <CoffeeProfileHeading
        countryCode={countryCode}
        roaster={roaster}
        name={name}
      />

      <CoffeeDetail roastLevel={roastLevel} />

      <Grid type="details">
        <Detail label="Origin" value={origin} />
        <Detail label="Method" value={method} />
        <Detail label="Altitude" value={`${altitude} m.a.s.l.`} />
        <Detail label="Variety" value={variety} />
      </Grid>

      {notes.length > 0 && (
        <div>
          <p className="mb-2 text-xs font-bold tracking-wider text-stone-400 uppercase">
            Tasting Notes
          </p>
          <div className="gap-1.2 flex flex-wrap gap-2">
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
  );
};

export default CoffeeProfile;

const CoffeeProfileHeading = ({ countryCode, roaster, name }) => {
  return (
    <div>
      <div className="flex items-center gap-3">
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
