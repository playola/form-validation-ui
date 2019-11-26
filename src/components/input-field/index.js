import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const InputField = ({
  name,
  inputRef,
  placeholder,
  type,
  pattern,
  minLength,
  maxLength,
  ...props
}) => (
  <InputFieldWrapper>
    <Input
      id={name}
      name={name}
      ref={inputRef}
      type={type}
      pattern={pattern}
      minLength={minLength}
      maxLength={maxLength}
      required
      {...props}
    />
    <FloatingLabel>{placeholder}</FloatingLabel>
  </InputFieldWrapper>
);

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  inputRef: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(['text', 'password', 'number', 'email', 'tel']),
  pattern: PropTypes.string,
  minLength: PropTypes.string,
  maxLength: PropTypes.string,
};

InputField.defaultProps = {
  inputRef: () => {},
  placeholder: 'Input field',
  type: 'text',
  pattern: '.*',
  minLength: '1',
  maxLength: '20',
};

const InputFieldWrapper = styled.div`
  position: relative;
  margin: 20px 0;
`;

const Input = styled.input`${({ theme, isFormik = false }) => {
  const themeColor = isFormik ? theme.color.formikPrimary : theme.color.reactHookFormPrimary;
  return css`
    width: -webkit-fill-available;
    height: 40px;
    padding: 5px 10px;
    border: 1px solid ${themeColor};
    border-radius: 3px;
    font-size: 16px;
    color: ${themeColor};
    transition: all .3s ease;

    &:focus {
      outline: none;
      border: 2px solid ${themeColor};
    }

    &:-webkit-inner-spin-button {
      -webkit-appearance: none;
    }

    @media (min-width: ${theme.breakpoint.mobile}px) {
      width: ${theme.breakpoint.mobile}px;
    }
  `;
}}`;

const FloatingLabel = styled.label`
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

export default InputField;
