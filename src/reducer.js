const initialRestaurant = {
  name: "",
  category: "",
  address: "",
};

const initialState = {
  restaurants: [],
  restaurant: initialRestaurant,
};

const reducer = (state = initialState, action) => {
  if (action.type === "setRestaurants") {
    const { restaurants } = action.payload;

    return {
      ...state,
      restaurants,
    };
  }

  if (action.type === "changeRestaurantField") {
    const { field, value } = action.payload;

    return {
      ...state,
      restaurant: {
        ...state.restaurant,
        [field]: value,
      },
    };
  }

  if (action.type === "addRestaurant") {
    const { restaurants, restaurant } = state;

    return {
      ...state,
      restaurants: [...restaurants, restaurant],
      restaurant: initialRestaurant,
    };
  }

  return state;
};

export default reducer;
