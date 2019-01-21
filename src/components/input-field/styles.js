import styled, { css } from 'styled-components';

export const InputFieldWrapper = styled.div`
  position: relative;
  margin: 20px 0;
`;

export const Input = styled.input`${({ theme }) => css`
  width: -webkit-fill-available;
  height: 40px;
  padding: 5px 10px;
  border: 1px solid ${theme.color.primary};
  border-radius: 3px;
  font-size: 16px;
  color: ${theme.color.primary};
  transition: all .3s ease;

  &:focus {
    outline: none;
    border: 2px solid ${theme.color.primary};
  }

  &:-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  @media (min-width: ${theme.breakpoint.mobile}px) {
    width: ${theme.breakpoint.mobile}px;
  }
`}`;

export const FloatingLabel = styled.label`
  position: absolute;
  pointer-events: none;
  left: 11px;
  top: 17px;
  font-size: 16px;
  color: ${({ theme }) => theme.color.primary};
  transition: all .3s ease;

  ${Input}:focus + & {
    font-size: 12px;
    padding: 0 5px;
    top: -8px;
    background-color: white;
  }

  ${Input}:valid + & {
    font-size: 12px;
    padding: 0 5px;
    top: -8px;
    background-color: white;
  }
`;
