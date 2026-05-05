import RoastProfile from "./RoastProfile";

const CoffeeProfile = ({ coffee }) => {
  console.log(coffee);

  const {
    name = "Unknown",
    roaster = "",
    origin = "Unknown",
    countryCode = "",
    method = "N/A",
    roastLevel = 1,
    altitude = "N/A",
    variety = "N/A",
    notes = [],
  } = coffee || {};

  return (
    <div className="flex max-w-md flex-col gap-6 rounded-xl border bg-white p-4 shadow-sm">
      <div>
        <div className="flex items-center gap-3">
          {countryCode && (
            <img
              src={`https://flagsapi.com/${countryCode}/flat/32.png`}
              alt="country"
              className=""
            />
          )}
          <h2 className="text-2xl font-bold text-stone-800">{name}</h2>
        </div>
        <p className="text-sm font-medium text-stone-500 italic">{roaster}</p>
      </div>

      <RoastProfile roastLevel={roastLevel} />

      <div className="grid grid-cols-2 gap-y-2 border-y border-stone-100 py-4 text-sm">
        <Detail label="Origin" value={origin} />
        <Detail label="Method" value={method} />
        <Detail label="Altitude" value={`${altitude} m.a.s.l.`} />
        <Detail label="Variety" value={variety} />
      </div>

      {notes.length > 0 && (
        <div>
          <p className="mb-2 text-xs font-bold tracking-wider text-stone-400 uppercase">
            Tasting Notes
          </p>
          <div className="flex flex-wrap gap-2">
            {notes.map((note, index) => (
              <Note label={note} key={index} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const Note = ({ label }) => {
  return (
    <span
      className={`rounded-full border border-amber-800 bg-amber-50 px-2 py-1 text-xs text-amber-800 shadow-xs`}
    >
      {label}
    </span>
  );
};

const Detail = ({ label, value }) => (
  <div className="flex flex-col">
    <span className="text-[10px] font-bold text-stone-400 uppercase">
      {label}
    </span>
    <span className="font-medium text-stone-700">{value}</span>
  </div>
);

export default CoffeeProfile;
