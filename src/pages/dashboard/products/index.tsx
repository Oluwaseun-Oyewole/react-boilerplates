import { Link } from "react-router-dom";
import { Routes } from "../../../routes/routes";

const Products = () => {
  return (
    <div>
      <h1>Products</h1>
      <Link to={Routes.dashboard}>Dashboard</Link> <br />
      <Link to={Routes.login}>Logout</Link>
    </div>
  );
};

export default Products;
