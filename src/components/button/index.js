import styled, { css } from 'styled-components';

const Button = styled.button`${({ theme, isFormik = false }) => css`
  width: 100%;
  padding: 15px 10px;
  border-radius: 3px;
  background: ${isFormik ? theme.color.formikPrimary : theme.color.reactHookFormPrimary};
  color: ${isFormik ? theme.color.formikSecondary : theme.color.reactHookFormSecondary};
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  @media (min-width: ${theme.breakpoint.mobile}px) {
    width: ${theme.breakpoint.mobile + 20}px;
  }
`}`;

export default Button;
