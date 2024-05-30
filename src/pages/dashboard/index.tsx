import { Link } from "react-router-dom";
import { Routes } from "../../routes/routes";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link to={Routes.products}>All Products</Link> <br />
      <Link to={Routes.login}>Logout</Link>
    </div>
  );
};

export default Dashboard;
