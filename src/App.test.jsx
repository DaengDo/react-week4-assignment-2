import { render } from "@testing-library/react";

import { useDispatch, useSelector } from "react-redux";

import App from "./App";

import restaurants from "../fixtures/restaurants";

jest.mock("react-redux");

describe("App 컴포넌트", () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) =>
    selector({ restaurants, restaurant: {} }),
  );

  const { getByText } = render(<App />);

  context("랜더되면", () => {
    it("레스토랑 앱의 제목과 목록이 출력된다.", () => {
      expect(getByText(/Restaurants/)).not.toBeNull();
      expect(getByText(/정돈/)).not.toBeNull();
    });
  });

  context("초기에 실행할 때", () => {
    it("setRestaurants 액션을 디스패치한다.", () => {
      expect(dispatch).toBeCalledWith({
        type: "setRestaurants",
        payload: { restaurants },
      });
    });
  });
});
