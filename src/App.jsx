import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './App.css'; // Import your CSS file

const validationSchema = Yup.object({
  username: Yup.string()
    .min(3, 'Username must be at least 3 characters')
    .required('Username is required'),
  email: Yup.string()
    .email('Email address is invalid')
    .required('Email is required'),
});

const App = () => {
  return (
    <Formik
      initialValues={{ username: '', email: '' }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log('Form data', values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <div className={`form-group ${errors.username && touched.username ? 'has-error' : ''}`}>
            <label htmlFor="username">Username</label>
            <Field name="username" type="text" />
            <ErrorMessage name="username" component="div" className="error-message" />
          </div>
          <div className={`form-group ${errors.email && touched.email ? 'has-error' : ''}`}>
            <label htmlFor="email">Email</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" component="div" className="error-message" />
          </div>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default App;
