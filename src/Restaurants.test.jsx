import { render } from "@testing-library/react";

import Restaurants from "./Restaurants";

import restaurants from "../fixtures/restaurants";

describe("Restaurants 컴포넌트", () => {
  const RestaurantsComponent = <Restaurants restaurants={restaurants} />;

  context("랜더할 때", () => {
    const { getByText } = render(RestaurantsComponent);

    it("레스토랑 목록이 출력된다.", () => {
      expect(getByText(/정돈/)).not.toBeNull();
    });
  });
});
