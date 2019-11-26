import React from 'react';
import useForm from 'react-hook-form';
import { Title, Button, InputField } from '@Components';

const ReactHookForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (values) => {
    console.log('react-hook-form values', values);
  };

  return (
    <div>
      <Title>React Hook Form</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          name="firstName"
          placeholder="First name"
          inputRef={register}
        />
        <InputField
          name="lastName"
          placeholder="Last name"
          inputRef={register}
        />
        <InputField
          name="email"
          placeholder="Email"
          inputRef={register}
        />
        <Button type="submit">Submit react-hook-form</Button>
      </form>
    </div>
  );
};

export default ReactHookForm;
