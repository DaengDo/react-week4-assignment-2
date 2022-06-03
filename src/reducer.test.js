import reducer from "./reducer";

import { setRestaurants } from "./actions";

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
});
