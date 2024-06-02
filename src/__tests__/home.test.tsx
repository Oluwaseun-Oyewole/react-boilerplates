import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import { Home } from "../routes/lazy";
import { Routes } from "../routes/routes";
import memoryBrowserRouterWrapper from "../utils/test.wrapper";

describe("Home page", () => {
  const links = [{ title: "Login", link: Routes.login }];
  test("home page renders correctly", async () => {
    render(
      memoryBrowserRouterWrapper(
        [{ path: Routes.base, element: <Home /> }],
        Routes.base,
      ),
    );
    await waitFor(() => screen.getByRole("heading", { name: /home/i }));
    links.forEach((link) => {
      expect(screen.getByText(link.title)).toBeInTheDocument();
    });
    expect(
      screen.getByRole("heading", { name: "Home Page" }),
    ).toHaveTextContent("Home Page");
  });
  test("nav component has correct href attributes", () => {
    render(
      memoryBrowserRouterWrapper(
        [{ path: Routes.base, element: <Home /> }],
        Routes.base,
      ),
    );
    links?.map((route) => {
      const linkElement = screen.getByRole("link", { name: route.title });
      expect(linkElement).toHaveAttribute("href", route.link);
    });
  });

  test("renders an empty list when no items are provided", () => {
    render(
      memoryBrowserRouterWrapper(
        [{ path: Routes.base, element: <Home /> }],
        Routes.base,
      ),
    );
    const list = screen.getByRole("list");
    expect(list).not.toBeEmptyDOMElement();
  });
});
