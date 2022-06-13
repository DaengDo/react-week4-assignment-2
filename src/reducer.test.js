import reducer from "./reducer";

import {
  setRestaurants,
  addRestaurant,
  changeRestaurantField,
} from "./actions";

import restaurants from "../fixtures/restaurants";

describe("reducer", () => {
  context("setRestaurants 액션이 디스패치되면", () => {
    const initialState = {
      restaurants: [],
    };

    const state = reducer(initialState, setRestaurants([restaurants]));

    it("레스토랑이 추가된다.", () => {
      expect(state.restaurants).not.toHaveLength(0);
    });
  });

  context("changeRestaurant 액션이 디스패치되면", () => {
    const initialState = {
      restaurant: {
        name: "이름",
        category: "분류",
        address: "주소",
      },
    };

    const state = reducer(
      initialState,
      changeRestaurantField({
        field: "name",
        value: "정돈",
      }),
    );

    it("레스토랑 form이 변경된다.", () => {
      expect(state.restaurant.name).toBe("정돈");
    });
  });

  context("addRestaurant 액션이 디스패치되면,", () => {
    const initialState = {
      newId: 100,
      restaurants: [],
      restaurant: {
        name: "정돈",
        category: "일식",
        address: "서울시 강남구",
      },
    };

    const state = reducer(initialState, addRestaurant());

    it("레스토랑 목록이 추가되고, form이 초기화 된다.", () => {
      const restaurant = state.restaurants[restaurants.length - 1];

      expect(restaurant.id).toBe(100);
      expect(restaurant.name).toBe("정돈");

      expect(state.newId).toBe(101);

      expect(state.restaurants).toHaveLength(1);

      expect(state.restaurant.name).toBe("");
    });
  });
});
