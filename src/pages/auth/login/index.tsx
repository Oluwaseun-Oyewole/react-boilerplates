import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Routes } from "../../../routes/routes";

const initialFormValues = {
  password: "",
  email: "",
};
const Login = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [formData, setFormData] = useState(initialFormValues);
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    try {
      e.preventDefault();
      setSubmitted(true);
      setFormData(initialFormValues);
      setIsChecked(false);
      navigate(Routes.dashboard);
    } catch (error) {
      return;
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <br />
      {submitted && <p>Form submitted!</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            className="outline-none border-none w-[100%] bg-gray-100 px-2 py-3"
          />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleInputChange}
            className="outline-none border-none w-[100%] bg-gray-100 px-2 py-3"
          />
        </div>

        <br />
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
      </form>
    </div>
  );
};

export default Login;
