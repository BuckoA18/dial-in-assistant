import { useDispatch, useSelector } from "react-redux";
import { useCoffees } from "../../../hooks/useCoffees";
import { setActiveCoffee } from "../../coffee/coffeeSlice";
import CoffeeItem from "./CoffeeItem";
import CoffeeDetails from "../../coffee/CoffeeDetails";

const CoffeeStep = () => {
  const dispatch = useDispatch();
  const activeCoffee = useSelector((state) => state.coffee.activeCoffee);
  const { data: coffees, error, isLoading } = useCoffees();

  const handleClick = (id) => {
    const selectedCoffee =
      activeCoffee?.id === +id
        ? null
        : coffees?.find((coffee) => coffee.id === id);
    dispatch(setActiveCoffee(selectedCoffee));
  };

  const handleClose = () => {
    dispatch(setActiveCoffee(null));
  };

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;

  return (
    <>
      <div className="grow sm:hidden">
        {activeCoffee && (
          <CoffeeDetails data={activeCoffee} onClose={handleClose} />
        )}
        {!activeCoffee && (
          <ul className="flex h-full max-w-xl flex-col justify-center gap-2">
            {coffees?.map((bean) => (
              <CoffeeItem data={bean} key={bean.id} onClick={handleClick} />
            ))}
          </ul>
        )}
      </div>

      <div className="hidden max-w-2xl grow justify-center gap-6 sm:flex">
        <ul className="flex h-full max-w-xl flex-col justify-center gap-1">
          {coffees?.map((coffee) => (
            <CoffeeItem
              data={coffee}
              key={coffee.id}
              onClick={handleClick}
              isOpen={activeCoffee?.id === coffee.id}
            />
          ))}
        </ul>
        {activeCoffee && <div className="my-8 w-px bg-stone-200"></div>}
        {activeCoffee && (
          <CoffeeDetails data={activeCoffee} onClose={handleClose} />
        )}
      </div>
    </>
  );
};

export default CoffeeStep;
