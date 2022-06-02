import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { setRestaurants } from "./actions";

import RestaurantsContainer from "./RestaurantsContainer";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRestaurants(Restaurants));
  }, []);
  return (
    <>
      <RestaurantsContainer />
    </>
  );
}
