import React from 'react';
import { InputField, Title } from '@Components';

const FieldLevelValidation = () => (
  <div>
    <Title innerTitle>Form Level Validation</Title>
    <InputField type="type" placeholder="Username" />
    <InputField type="password" placeholder="Password" />
  </div>
);

export default FieldLevelValidation;
