import { ReactNode } from 'react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';

export type routeType = { path: string; element: ReactNode };

const memoryBrowserRouterWrapper = (route: routeType[], entries: string) => {
  const router = createMemoryRouter(route, {
    initialEntries: [entries],
  });
  return <RouterProvider router={router} />;
};
export default memoryBrowserRouterWrapper;
