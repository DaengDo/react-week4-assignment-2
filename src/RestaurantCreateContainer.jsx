import { useDispatch, useSelector } from "react-redux";

import RestaurantForm from "./RestaurantForm";

import { addRestaurant } from "./actions";

export default function RestaurantCreateContainer() {
  const dispatch = useDispatch();

  function handleClick(event) {
    dispatch(addRestaurant());
    event.preventDefault();
  }

  const { restaurant } = useSelector((state) => ({
    restaurant: state.restaurant,
  }));

  return <RestaurantForm restaurant={restaurant} onClick={handleClick} />;
}
