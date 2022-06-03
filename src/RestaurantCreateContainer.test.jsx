import { render } from "@testing-library/react";

import { useSelector } from "react-redux";

import RestaurantCreateContainer from "./RestaurantCreateContainer";

jest.mock("react-redux");

describe("RestaurantsCreateContainer 컴포넌트", () => {
  useSelector.mockImplementation((selector) => selector({}));

  const RestaurantsContainerComponent = <RestaurantCreateContainer />;

  context("랜더할 때", () => {
    const { getByText } = render(RestaurantsContainerComponent);

    it("레스토랑 등록 버튼이 출력된다.", () => {
      expect(getByText(/등록/)).not.toBeNull();
    });
  });
});
