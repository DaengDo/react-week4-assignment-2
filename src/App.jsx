import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';
import RestaurantsContainer from './RestaurantsContainer';
import RestaurantCreateContainer from './RestaurantCreateContainer';

import { setRestaurants, setCategories } from './actions';

import { fetchCategories } from './services/api';

async function loadCategories({ dispatch }) {
  const categories = await fetchCategories();
  // TODO: fetch GET /categories
  // REST - CRUD => READ - collection / memever, element
  dispatch(setCategories(categories));
}

function loadRestaurants({ dispatch }) {
  const restaurants = [];
  // TODO: load restaurants from API server
  dispatch(setRestaurants(restaurants));
}

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(loadCategories());
    loadCategories({ dispatch });
    loadRestaurants({ dispatch });
  }, []);

  return (
    <>
      <h1>Restaurants</h1>
      <CategoriesContainer />
      <RestaurantsContainer />
      <RestaurantCreateContainer />
    </>
  );
}
