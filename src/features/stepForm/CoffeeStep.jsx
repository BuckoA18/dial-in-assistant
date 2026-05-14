import { useBeans } from "../../hooks/useBeans";
import CardSelect from "../../ui/CardSelect";
import CoffeeProfile from "../../ui/CoffeeProfile";

const CoffeeStep = () => {
  const { data: beans, error, isLoading } = useBeans();

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;

  return (
    <>
      <CardSelect
        key="coffee-select"
        options={beans}
        optionComponent={CoffeeProfile}
        defaultValue={beans[0]}
      />
    </>
  );
};

export default CoffeeStep;
