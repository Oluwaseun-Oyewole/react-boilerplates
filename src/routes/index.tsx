import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../layouts/auth";
import DashboardLayout from "../layouts/dashboard";
import { authenticationRoutes } from "./auth.routes";
import { dashboardRoutes } from "./dashboard.routes";
import { Home } from "./lazy";
import { Routes } from "./routes";

const routes = createBrowserRouter([
  {
    path: Routes.base,
    element: <Home />,
    //  errorElement: <ErrorPage />
  },
  {
    path: Routes.auth,
    element: <AuthLayout />,
    children: [...authenticationRoutes()],
  },

  {
    path: Routes.dashboard,
    element: <DashboardLayout />,
    children: [...dashboardRoutes()],
  },
]);

export default routes;
