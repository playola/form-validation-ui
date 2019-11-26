import React from 'react';
import styled, { css } from 'styled-components';
import formikIcon from '@Assets/img/formik-icon.png';
import reactHookFormIcon from '@Assets/img/react-hook-form-icon.png';

const Header = () => (
  <HeaderWrapper>
    <Image src={formikIcon} />
    <span>vs</span>
    <Image src={reactHookFormIcon} />
  </HeaderWrapper>
);

const HeaderWrapper = styled.div`
  padding: 20px 0 5px 0;
  text-align: center;
  box-shadow: 0 0 10px rgba(0,0,0,0.3);
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`${({
  width,
  theme,
}) => css`
  width: ${width || 40}%;

  @media (min-width: ${theme.breakpoint.tablet}px) {
    width: ${(width - width / 4) || 25}%;
  }

  @media (min-width: ${theme.breakpoint.desktop}px) {
    width: ${(width - width / 2) || 15}%;
  }
`}`;

export default Header;
