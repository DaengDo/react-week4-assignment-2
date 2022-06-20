import { render } from "@testing-library/react";

import Categories from "./Categories";

describe("Categories 컴포넌트", () => {
  const categories = [{ id: 1, name: "한식" }];

  context("랜더할 때", () => {
    const { getByText } = render(<Categories categories={categories} />);

    it("카테고리가 출력된다.", () => {
      expect(getByText("한식")).not.toBeNull();
    });
  });
});
