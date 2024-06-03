import { Form, Formik } from 'formik';
import { ZodError } from 'zod';
import { LoginFormValues, loginValidationSchema } from '../schema/login';

const LoginFormikForm = () => {
  const validateForm = (values: LoginFormValues) => {
    try {
      loginValidationSchema.parse(values);
    } catch (error) {
      if (error instanceof ZodError) {
        return error.formErrors.fieldErrors;
      }
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (values: LoginFormValues, { resetForm }: any) => {
    try {
      console.log('values -- ', values);
      resetForm();
    } catch (error) {
      return;
    }
  };

  return (
    <div>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validate={validateForm}
        onSubmit={handleSubmit}
      >
        {(formik) => {
          return (
            <Form>
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  id="email"
                  type="email"
                  placeholder="email address"
                  name="email"
                  //   value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="border-[1.5px] border-gray-200 !py-7 pl-12"
                />
                <p role="alert" aria-live="assertive" aria-atomic="true">
                  {formik.errors.email}
                </p>
              </div>

              <div>
                <label htmlFor="password">Password:</label>
                <input
                  id="password"
                  name="password"
                  //   value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="password"
                  className="border-[1.7px] border-gray-300 !py-7 pl-12"
                />
                <p role="alert" aria-live="assertive" aria-atomic="true">
                  {formik.errors.password}
                </p>
              </div>

              <button
                type="submit"
                disabled={!formik.isValid}
                className="pt-5 !disabled:cursor-not-allowed w-full py-6 bg-deepBlue hover:bg-lightBlue transition-all ease-in-out duration-500 flex items-center gap-2"
              >
                login
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default LoginFormikForm;
