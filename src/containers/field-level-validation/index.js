import React from 'react';
import { Formik, Field } from 'formik';
import { Button, InputField } from '@Components';
import { Title } from './styles';

const CustomInputField = ({
  field,
  form: { touched, errors },
  ...props
}) => (
  <div>
    <InputField {...field} {...props} />
    { touched[field.name] && errors[field.name] && <div>{errors[field.name]}</div> }
  </div>
);

const FieldLevelValidation = () => (
  <div>
    <Title>Form Validation</Title>
    <Formik
      initialValues={{
        username: '',
        password: '',
        phone: '',
        zipcode: '',
      }}
      onSubmit={(values, actions) => {
        console.log('values', values);
        console.log('actions', actions);
      }}
      render={props => (
        <div>
          <form onSubmit={props.handleSubmit}>
            <Field
              name="username"
              placeholder="Username"
              component={CustomInputField}
            />
            <Field
              name="password"
              placeholder="Password"
              type="password"
              component={CustomInputField}
            />
            <Field
              name="phone"
              placeholder="Phone"
              maxLength="9"
              component={CustomInputField}
            />
            <Field
              name="zipcode"
              placeholder="Zip Code"
              type="tel"
              maxLength="5"
              component={CustomInputField}
            />
            <Button type="submit">Submit Formik</Button>
          </form>
        </div>
      )}
    />
  </div>
);

export default FieldLevelValidation;
