import React from 'react';
import styled from 'styled-components';
import reduxFormIcon from '@Assets/img/redux-form-icon.png';

const HeaderWrapper = styled.div`
  height: 150px;
  padding-top: 20px;
  text-align: center;
  box-shadow: 0 0 10px rgba(0,0,0,0.3);
`;

const Image = styled.img`
  width: 100px;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.primary};
`;

export const Header = () => (
  <HeaderWrapper>
    <Image src={reduxFormIcon} />
    <Title>Form Validation UI</Title>
  </HeaderWrapper>
);
