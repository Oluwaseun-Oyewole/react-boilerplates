import {
  lazyLoadAuthRoutes,
  lazyLoadDashboardIndexRoute,
  lazyLoadDashboardRoutes,
  lazyLoadRoutes,
} from '../utils/routes';

export const Home = lazyLoadRoutes('');
export const Login = lazyLoadAuthRoutes('login');
export const SignUp = lazyLoadAuthRoutes('signUp');
export const Dashboard = lazyLoadDashboardIndexRoute();
export const Products = lazyLoadDashboardRoutes('products');
export const Albums = lazyLoadDashboardRoutes('albums');
