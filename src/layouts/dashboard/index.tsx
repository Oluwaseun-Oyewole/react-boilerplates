import { Outlet } from "react-router-dom";
import Navigation from "../../components/custom/nav";
import { dashboardNav } from "../../helper/constants";

const DashboardLayout = () => {
  return (
    <>
      <Navigation routes={dashboardNav} />
      <main className="flex items-center justify-center">
        <Outlet />
      </main>
    </>
  );
};

export default DashboardLayout;
