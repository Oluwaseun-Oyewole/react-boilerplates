import { lazy } from "react";

export const lazyLoadAuthRoutes = (page: string) =>
  lazy(() => import(`../pages/auth/${page}/index.tsx`));

export const lazyLoadDashboardRoutes = (page: string) =>
  lazy(() => import(`../pages/dashboard/${page}/index.tsx`));

export const lazyLoadDashboardIndexRoute = () =>
  lazy(() => import(`../pages/dashboard/index.tsx`));

export const lazyLoadRoutes = (page: string) =>
  lazy(() => import(`../pages${page}/index.tsx`));
