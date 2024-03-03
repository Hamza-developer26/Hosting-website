import { useFormik } from "formik";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      // Actual login logic can be added here
      if (values.email && values.password) {
        alert("You are logged in!");
      }
    },
    validate: (values) => {
      const errors = {};

      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }

      if (!values.password) {
        errors.password = "Required";
      }

      return errors;
    },
  });

  return (
    <div className="bg-primary">
      <h1 className="text-7xl font-orbitron text-white relative top-[200px] px-12">Log<span className="text">in:</span></h1>
      <form onSubmit={formik.handleSubmit} className="flex flex-col items-center py-8 gap-4 font-poppins">
        <label htmlFor="email" className="text-white">Email:</label>
        <input
          id="email"
          name="email"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className="p-4 input-field rounded-xl"
          placeholder="Email"
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="text-white">{formik.errors.email}</div>
        ) : null}

        <label htmlFor="password" className="text-white">Password:</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          className="p-4 input-field rounded-xl"
          placeholder="Password"
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="text-white">{formik.errors.password}</div>
        ) : null}

        <button
          type="submit"
          className="button-gradient text-white font-poppins w-[150px] h-[50px] text-[15px] rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
