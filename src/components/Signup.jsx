// Signup.js
// import React from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    onSubmit: () => {
      if (
        !formik.errors.username &&
        !formik.errors.email &&
        !formik.errors.password &&
        !formik.errors.confirmPassword
      ) {
        // If no validation errors, redirect to the next page after successful signup
        console.log('Form submitted successfully');
        navigate('/Login'); // Replace '/nextPage' with your desired route
      } else {
        // If any field has an error, do not redirect
        console.log('Please fill out all fields correctly');
      }
    },
    validate: (values) => {
      const errors = {};

      // Add your validation logic here, for example:
      if (!values.username) {
        errors.username = 'Required!';
      }

      if (!values.email) {
        errors.email = 'Required!';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }

      if (!values.password) {
        errors.password = 'Required!';
      }

      if (!values.confirmPassword) {
        errors.confirmPassword = 'Required!';
      } else if (values.confirmPassword !== values.password) {
        errors.confirmPassword = 'Passwords do not match';
      }

      return errors;
    },
  });

  return (
    <div className='bg-primary font-poppins' >
      <h1 className='text-7xl font-orbitron text-white relative top-[200px] px-12  '>Sign<span className='text'>up:</span></h1>
      <form onSubmit={formik.handleSubmit} className="flex flex-col items-center py-8 gap-4">
        <label htmlFor="username" className='text-white'>Username:</label>
        <input
          id="username"
          name="username"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.username}
          className="p-4 input-field rounded-xl"
          placeholder='Name'
        />
        {formik.touched.username && formik.errors.username ? (
          <div className="error-message text-white">{formik.errors.username}</div>
        ) : null}

        <label htmlFor="email" className='text-white'>Email:</label>
        <input
          id="email"
          name="email"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className="p-4 input-field rounded-xl "
          placeholder='Email'
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="error-message text-white">{formik.errors.email}</div>
        ) : null}

        <label htmlFor="password" className='text-white' >Password:</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          className="p-4 input-field rounded-xl"
          placeholder='Password'
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="error-message text-white">{formik.errors.password}</div>
        ) : null}

        <label htmlFor="confirmPassword" className='text-white'>Confirm Password:</label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.confirmPassword}
          className="p-4 input-field rounded-xl"
          placeholder='Confirm Password'
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
          <div className="error-message text-white">{formik.errors.confirmPassword}</div>
        ) : null}

        {/* Submit button */}
        <button type="submit" className="button-gradient text-white font-poppins w-[150px] h-[50px] text-[15px] rounded">
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
