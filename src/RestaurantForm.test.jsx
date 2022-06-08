import { fireEvent, render } from "@testing-library/react";

import RestaurantForm from "./RestaurantForm";

describe("RestaurantsForm 컴포넌트", () => {
  context("등록 버튼을 누르면", () => {
    const restaurant = {
      name: "묘오또",
      category: "일식",
      address: "서울시 서초구 방배동",
    };

    const handleClick = jest.fn((event) => event.preventDefault());
    const handleChange = jest.fn();

    const { getByText, getByDisplayValue } = render(
      <RestaurantForm
        restaurant={restaurant}
        onChange={handleChange}
        onClick={handleClick}
      />,
    );

    it("레스토랑 목록이 추가된다.", () => {
      expect(getByDisplayValue("묘오또")).not.toBeNull();
      expect(getByDisplayValue("일식")).not.toBeNull();
      expect(getByDisplayValue("서울시")).not.toBeNull();
      expect(getByText("등록")).not.toBeNull();

      fireEvent.change(getByDisplayValue("서울시"), {
        target: { value: "서울시 서초구 방배동" },
      });

      expect(handleChange).toBeCalledWith({
        field: "address",
        value: "서울시 서초구 방배동",
      });

      fireEvent.click(getByText(/등록/));

      expect(handleClick).toBeCalled();
    });
  });
});
