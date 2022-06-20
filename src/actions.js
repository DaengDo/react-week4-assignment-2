export function setRestaurants(restaurants) {
  return {
    type: "setRestaurants",
    payload: {
      restaurants,
    },
  };
}

export function setCategories(categories) {
  return {
    type: "setCategories",
    payload: {
      categories,
    },
  };
}

export function addRestaurant() {
  return {
    type: "addRestaurant",
  };
}

export function changeRestaurantField({ field, value }) {
  return {
    type: "changeRestaurantField",
    payload: {
      field,
      value,
    },
  };
}
