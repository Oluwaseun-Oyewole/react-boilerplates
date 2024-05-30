import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import { Home, Login } from "../routes/lazy";
import { Routes } from "../routes/routes";
import memoryBrowserRouterWrapper from "../utils/test.wrapper";

test("login renders correctly", async () => {
  render(
    memoryBrowserRouterWrapper(
      [{ path: Routes.login, element: <Login /> }],
      Routes.login,
    ),
  );
  await waitFor(() => screen.getByRole("heading"));
  expect(screen.getByRole("heading")).toHaveTextContent("Login");
});

test("home page renders correctly", async () => {
  render(
    memoryBrowserRouterWrapper(
      [{ path: Routes.base, element: <Home /> }],
      Routes.base,
    ),
  );
  await waitFor(() => screen.getByRole("button"));
  expect(screen.getByRole("button")).toHaveTextContent("Home Page");
});
