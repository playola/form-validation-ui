import React from 'react';
import { InputField, Title } from '@Components';

const FieldLevelValidation = () => (
  <div>
    <Title innerTitle>Form Level Validation</Title>
    <InputField placeholder="Username" />
    <InputField type="password" placeholder="Password" />
    <InputField type="tel" placeholder="Phone number" maxLength="9" />
    <InputField placeholder="Zip code" maxLength="5" />
  </div>
);

export default FieldLevelValidation;
