import { ChevronRight } from "lucide-react";
import Button from "../../../ui/Button";

const CoffeeItem = ({ data, onClick, isOpen }) => {
  const { id, name = "Unknown", roaster = "", countryCode = "BR" } = data || {};

  return (
    <li
      className={`relative flex flex-col gap-4 rounded-xl border p-4 transition-colors sm:w-2xs ${isOpen ? " border-orange-400 bg-orange-100 shadow-sm" : " border-stone-200"}`}
      onClick={() => {
        if (!isOpen) onClick(id);
      }}
    >
      <Button
        type="icon"
        styles={`absolute right-0 z-99 transition-transform ${isOpen && "rotate-90"}`}
        onClick={(e) => {
          e.preventDefault();
          onClick(id);
        }}
      >
        <ChevronRight />
      </Button>
      <CoffeeProfileHeading
        countryCode={countryCode}
        roaster={roaster}
        name={name}
      />
    </li>
  );
};

export default CoffeeItem;

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
