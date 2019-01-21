import React from 'react';
import styled from 'styled-components';
import { Header } from '@Components';
import FieldLevelValidation from './field-level-validation';

const ValidationsWrapper = styled.div`
  padding: 20px;
`;

const App = () => (
  <div>
    <Header />
    <ValidationsWrapper>
      <FieldLevelValidation />
    </ValidationsWrapper>
  </div>
);

export default App;
