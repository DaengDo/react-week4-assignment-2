const initialRestaurant = {
  name: "",
  category: "",
  address: "",
};

const initialState = {
  newId: 1,
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
    const { restaurants, restaurant, newId } = state;

    return {
      ...state,
      newId: newId + 1,
      restaurants: [...restaurants, { ...restaurant, id: newId }],
      restaurant: initialRestaurant,
    };
  }

  return state;
};

export default reducer;
