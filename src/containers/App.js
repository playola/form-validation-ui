import React from 'react';
import styled from 'styled-components';
import { Header } from '@Components';
import Formik from './formik';
import ReactHookForm from './react-hook-form';

const ValidationsWrapper = styled.div`
  padding: 20px;
`;

const App = () => (
  <div>
    <Header />
    <ValidationsWrapper>
      <Formik />
      <ReactHookForm />
    </ValidationsWrapper>
  </div>
);

export default App;
