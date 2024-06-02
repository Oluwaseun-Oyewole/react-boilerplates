import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";
import { Login } from "../routes/lazy";
import { Routes } from "../routes/routes";
import memoryBrowserRouterWrapper from "../utils/test.wrapper";

describe("Login", () => {
  test("should render login page correctly", async () => {
    render(
      memoryBrowserRouterWrapper(
        [{ path: Routes.login, element: <Login /> }],
        Routes.login,
      ),
    );
    await waitFor(() => screen.getByRole("heading"));
    expect(screen.getByRole("heading")).toHaveTextContent(/login/i);
  });

  test("should render button and disable checkbox correctly", async () => {
    render(
      memoryBrowserRouterWrapper(
        [{ path: Routes.login, element: <Login /> }],
        Routes.login,
      ),
    );
    const checkComponent = await screen.getByRole("checkbox");
    expect(checkComponent).not.toBeChecked();
    expect(screen.getByRole("button")).toBeDisabled();
  });

  test("should enable the button if the checkbox is checked", async () => {
    user.setup();
    render(
      memoryBrowserRouterWrapper(
        [{ path: Routes.login, element: <Login /> }],
        Routes.login,
      ),
    );
    const checkboxElement = screen.getByRole("checkbox");
    await user.click(checkboxElement);
    expect(screen.getByRole("button")).toBeEnabled();
  });
});
