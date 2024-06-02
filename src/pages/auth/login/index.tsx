import { useState } from "react";
import { Link } from "react-router-dom";
import { Routes } from "../../../routes/routes";

const Login = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div>
      <h1>Login Page</h1>
      <div className="flex items-center gap-5 text-blue-800 py-3">
        <Link to={Routes.dashboard}>Dashboard</Link>
        <Link to={Routes.base}>Home</Link> <br />
      </div>
      <label htmlFor="terms&condition">
        <input
          type="checkbox"
          name="terms&condition"
          id="terms&condition"
          checked={isChecked}
          onChange={() => {
            setIsChecked(!isChecked);
          }}
        />
        I accept the terms and condition
      </label>
      <button
        disabled={!isChecked}
        className="block disabled:bg-gray-300 bg-blue-500 px-8 py-2 mt-2  disabled:text-black disabled:cursor-not-allowed text-white"
      >
        Submit
      </button>
    </div>
  );
};

export default Login;
