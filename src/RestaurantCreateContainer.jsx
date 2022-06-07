import { useDispatch, useSelector } from "react-redux";

import RestaurantForm from "./RestaurantForm";

import { addRestaurant } from "./actions";

export default function RestaurantCreateContainer() {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(addRestaurant());
  }

  const { restaurant } = useSelector((state) => ({
    restaurant: state.restaurant,
  }));

  return <RestaurantForm restaurant={restaurant} onClick={handleClick} />;
}
