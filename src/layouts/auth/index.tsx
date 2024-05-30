import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <main className="flex h-screen items-center justify-center">
      <Outlet />
    </main>
  );
};

export default AuthLayout;
