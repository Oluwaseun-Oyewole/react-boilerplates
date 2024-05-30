import { Navigate, RouteObject } from "react-router-dom";
import { Dashboard, Products } from "./lazy";
import { Routes } from "./routes";

export const dashboardRoutes = () => {
  return [
    {
      path: Routes.dashboard,
      element: <Dashboard />,
    },

    {
      path: Routes.products,
      element: <Products />,
    },

    {
      path: Routes.dashboard,
      element: <Navigate to={Routes.dashboard} replace />,
    },
  ] as RouteObject[];
};
