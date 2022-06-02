import { render } from "@testing-library/react";

import App from "./App";

describe("App 컴포넌트", () => {
  const AppComponent = <App />;

  context("랜더할 때", () => {
    const { container } = render(AppComponent);

    it("레스토랑 앱의 제목이 출력된다.", () => {
      expect(container).toHaveTextContent(/Restaurants/);
    });

    it("레스토랑 목록이 출력된다.", () => {
      expect(container).toHaveTextContent(/정돈/);
    });
  });
});
