import { render } from "@testing-library/react";

import { useSelector } from "react-redux";

import CategoriesContainer from "./CategoriesContainer";

jest.mock("react-redux");

describe("CategoriesContainer 컴포넌트", () => {
  useSelector.mockImplementation((selector) =>
    selector({ categories: [{ id: 1, name: "한식" }] }),
  );

  context("랜더할 때", () => {
    const { getByText } = render(<CategoriesContainer />);

    it("카테고리가 출력된다.(일단 임시로 한식)", () => {
      expect(getByText("한식")).not.toBeNull();
    });
  });
});
