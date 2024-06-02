import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Home from "../pages";
import { Routes } from "../routes/routes";
import memoryBrowserRouterWrapper from "../utils/test.wrapper";

describe("Counter", () => {
  test("should renders 0 as the initial value ", () => {
    render(
      memoryBrowserRouterWrapper(
        [{ path: Routes.base, element: <Home /> }],
        Routes.base,
      ),
    );
    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toHaveTextContent("0");
  });

  test("should render a count 1 after clicking the increment button", async () => {
    user.setup();
    render(
      memoryBrowserRouterWrapper(
        [{ path: Routes.base, element: <Home /> }],
        Routes.base,
      ),
    );
    const button = screen.getByRole("button", { name: "Increment" });
    await user.click(button);
    const heading = await screen.getByRole("heading", { level: 2 });
    expect(heading).toHaveTextContent("0");
  });
});
