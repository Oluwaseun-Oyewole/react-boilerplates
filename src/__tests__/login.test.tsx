import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";
import LoginFormikForm from "../formik/login";
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

  test("render login form with initial state ", () => {
    render(
      memoryBrowserRouterWrapper(
        [{ path: Routes.login, element: <Login /> }],
        Routes.login,
      ),
    );
    expect(screen.getByLabelText(/password/i)).toHaveValue("");
    expect(screen.getByLabelText(/email/i)).toHaveValue("");
    expect(screen.getByRole("checkbox")).not.toBeChecked();
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeDisabled();
  });

  test("allow the user fill out the form ", async () => {
    user.setup();
    render(
      memoryBrowserRouterWrapper(
        [{ path: Routes.login, element: <Login /> }],
        Routes.login,
      ),
    );
    const password = screen.getByLabelText(/password/i);
    const email = screen.getByLabelText(/email/i);
    const button = screen.getByRole("button");
    const checkbox = screen.getByRole("checkbox");
    // fireEvent.change(password, { target: { value: "Seun" } });
    // fireEvent.change(email, { target: { value: "find@gmail.com" } });
    await user.type(password, "Seun");
    await user.type(email, "find@gmail.com");
    await user.click(checkbox);
    expect(password).toHaveValue("Seun");
    expect(email).toHaveValue("find@gmail.com");
    expect(checkbox).toBeChecked();
    expect(button).not.toBeDisabled();
  });

  test("rendering and submitting a basic Formik form", async () => {
    render(<LoginFormikForm />);
    user.setup();
    const password = await screen.getByLabelText(/password/i);
    await user.type(password, "Seun");
    const email = await screen.getByLabelText(/email/i);
    await user.type(email, "find@gmail.com");
    await user.click(screen.getByRole("button", { name: /login/i }));
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(password).toHaveValue("Seun");
    // expect(email).toHaveValue("find@gmail.com");
    // await waitFor(() => expect(password).toHaveValue("Seun"));
    // await waitFor(() => expect(password).toHaveValue("find@gmail.com"));
  });
});
