import { render, fireEvent } from "@testing-library/react";

import { useDispatch, useSelector } from "react-redux";

import RestaurantCreateContainer from "./RestaurantCreateContainer";

jest.mock("react-redux");

describe("RestaurantCreateContainer 컴포넌트", () => {
  const dispatch = jest.fn();

  useSelector.mockImplementation((selector) =>
    selector({
      restaurant: {
        name: "묘오또",
        category: "일식",
        adress: "서울시",
      },
    }),
  );

  useDispatch.mockImplementation(() => dispatch);

  const RestaurantsContainerComponent = <RestaurantCreateContainer />;

  context("등록버튼을 누를 때", () => {
    const { getByText, getByDisplayValue } = render(
      RestaurantsContainerComponent,
    );

    it("레스토랑 목록이 추가된다.", () => {
      expect(getByDisplayValue("묘오또")).not.toBeNull();
      expect(getByDisplayValue("일식")).not.toBeNull();
      expect(getByDisplayValue("서울시")).not.toBeNull();
      expect(getByText("등록")).not.toBeNull();

      fireEvent.click(getByText("등록"));

      expect(dispatch).toBeCalledWith({
        type: "addRestaurant",
      });
    });
  });
});
