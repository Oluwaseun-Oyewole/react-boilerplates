import { Routes } from "../routes/routes";

export const navLinks = [
  { title: "Login", link: Routes.login },
  { title: "Dashboard", link: Routes.dashboard },
];

export const loginNav = [
  { title: "Dashboard", link: Routes.dashboard },
  { title: "Home", link: Routes.base },
];

export const dashboardNav = [
  { title: "Products", link: Routes.products },
  { title: "Albums", link: Routes.albums },
  { title: "Dashboard", link: Routes.dashboard },
  { title: "Home", link: Routes.base },
];
