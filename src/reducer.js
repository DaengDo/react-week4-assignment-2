const initialState = {
  restaurants: [],
  restaurant: {
    name: "",
    category: "",
    adress: "",
  },
};

const reducer = (state = initialState, action) => {
  if (action.type === "setRestaurants") {
    const { restaurants } = action.payload;

    return {
      ...state,
      restaurants,
    };
  }
  return state;
};

export default reducer;
