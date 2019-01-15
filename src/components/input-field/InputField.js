import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const InputFieldWrapper = styled.div`
  position: relative;
  margin: 30px 0;
`;

const Input = styled.input`${({ theme }) => css`
  height: 40px;
  padding: 5px 10px;
  border: 1px solid ${theme.primary};
  border-radius: 3px;
  font-size: 16px;
  color: ${theme.primary};
  transition: all .3s ease;

  &:focus {
    outline: none;
    border: 2px solid ${theme.primary};
  }

  &:-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`}`;

const FloatingLabel = styled.label`
  position: absolute;
  left: 11px;
  top: 17px;
  font-size: 16px;
  color: ${({ theme }) => theme.primary};
  transition: all .3s ease;

  ${Input}:focus + & {
    font-size: 12px;
    padding-top: 3px;
    top: -18px;
    left: 0;
  }

  ${Input}:valid + & {
    font-size: 12px;
    padding-top: 3px;
    top: -18px;
    left: 0;
  }
`;

const InputField = ({
  type,
  placeholder,
  pattern,
  minLength,
  maxLength,
}) => (
  <InputFieldWrapper>
    <Input
      type={type}
      placeholder={placeholder}
      pattern={pattern}
      minLength={minLength}
      maxLength={maxLength}
      required
    />
    <FloatingLabel>{ placeholder }</FloatingLabel>
  </InputFieldWrapper>
);

InputField.propTypes = {
  type: PropTypes.oneOf(['text', 'password', 'number', 'email', 'tel']),
  placeholder: PropTypes.string,
  pattern: PropTypes.string,
  minLength: PropTypes.string,
  maxLength: PropTypes.string,
};

InputField.defaultProps = {
  type: 'text',
  placeholder: 'Type here',
  pattern: '^[a-zA-Z0-9_.-]*$',
  minLength: '1',
  maxLength: '20',
};

export default InputField;
