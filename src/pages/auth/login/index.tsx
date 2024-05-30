import { Link } from "react-router-dom";
import { Routes } from "../../../routes/routes";

const Login = () => {
  return (
    <div>
      <Link to={Routes.dashboard}>Login</Link> <br />
      <Link to={Routes.base}>Home</Link>
    </div>
  );
};

export default Login;
