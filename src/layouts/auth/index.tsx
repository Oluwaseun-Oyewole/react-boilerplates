import { Outlet } from 'react-router-dom';
import Navigation from '../../components/custom/nav';
import { loginNav } from '../../helper/constants';

const AuthLayout = () => {
  return (
    <>
      <Navigation routes={loginNav} />
      <main className="flex h-screen items-center justify-center">
        <Outlet />
      </main>
    </>
  );
};

export default AuthLayout;
