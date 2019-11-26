import React from 'react';
import { useFormik } from 'formik';
import { Title, Button, InputField } from '@Components';

const Formik = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: (values) => {
      console.log('formik values', values);
    },
  });

  return (
    <div>
      <Title isFormik>Formik</Title>
      <form onSubmit={formik.onSubmit}>
        <InputField
          name="firstName"
          placeholder="First name"
          onChange={formik.handleChange}
          value={formik.values.firstName}
          isFormik
        />
        <InputField
          name="lastName"
          placeholder="Last name"
          onChange={formik.handleChange}
          value={formik.values.lastName}
          isFormik
        />
        <InputField
          name="email"
          placeholder="Email"
          onChange={formik.handleChange}
          value={formik.values.email}
          isFormik
        />
        <Button type="submit" isFormik>Submit Formik</Button>
      </form>
    </div>
  );
};

export default Formik;
