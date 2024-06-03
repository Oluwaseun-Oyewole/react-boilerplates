import { Navigate, RouteObject } from 'react-router-dom';
import { Login, SignUp } from './lazy';
import { Routes } from './routes';

export const authenticationRoutes = () => {
  return [
    {
      path: Routes.login,
      element: <Login />,
    },

    {
      path: Routes.signUp,
      element: <SignUp />,
    },

    { path: Routes.auth, element: <Navigate to={Routes.login} replace /> },
  ] as RouteObject[];
};
