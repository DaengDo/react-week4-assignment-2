import { fireEvent, render } from "@testing-library/react";

import RestaurantForm from "./RestaurantForm";

describe("RestaurantsForm 컴포넌트", () => {
  const handleClick = jest.fn();

  context("등록 버튼을 누르면", () => {
    const { getByText } = render(<RestaurantForm onClick={handleClick} />);

    it("레스토랑 목록이 추가된다.", () => {
      fireEvent.click(getByText(/등록/));

      expect(handleClick).toBeCalled();
    });
  });
});
