import { useEffect } from "react";
import { useDispatch } from "react-redux";

import RestaurantsContainer from "./RestaurantsContainer";
import RestaurantCreateContainer from "./RestaurantCreateContainer";

import { setRestaurants } from "./actions";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRestaurants([]));
  }, []);

  return (
    <>
      <h1>Restaurants</h1>
      <RestaurantsContainer />
      <RestaurantCreateContainer />
    </>
  );
}
