import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <main className="flex h-screen items-center justify-center">
      <Outlet />
    </main>
  );
};

export default DashboardLayout;
