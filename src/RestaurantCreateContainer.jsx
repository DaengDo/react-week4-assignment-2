import { useDispatch, useSelector } from "react-redux";

import RestaurantForm from "./RestaurantForm";

import { addRestaurant, changeRestaurantField } from "./actions";

export default function RestaurantCreateContainer() {
  const dispatch = useDispatch();

  function handleChange({ field, value }) {
    dispatch(changeRestaurantField({ field, value }));
    // TODO:
  }

  function handleClick(event) {
    dispatch(addRestaurant());
    event.preventDefault();
  }

  const { restaurant } = useSelector((state) => ({
    restaurant: state.restaurant,
  }));

  return (
    <RestaurantForm
      restaurant={restaurant}
      onChange={handleChange}
      onClick={handleClick}
    />
  );
}
