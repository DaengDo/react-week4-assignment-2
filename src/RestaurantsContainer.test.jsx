import { render } from "@testing-library/react";

import { useSelector } from "react-redux";

import RestaurantsContainer from "./RestaurantsContainer";

import restaurants from "../fixtures/restaurants";

jest.mock("react-redux");

describe("RestaurantsContainer 컴포넌트", () => {
  useSelector.mockImplementation((selector) => selector({ restaurants }));

  const RestaurantsContainerComponent = <RestaurantsContainer />;

  context("랜더할 때", () => {
    const { getByText } = render(RestaurantsContainerComponent);

    it("레스토랑 목록이 출력된다.", () => {
      expect(getByText(/정돈/)).not.toBeNull();
    });
  });
});
