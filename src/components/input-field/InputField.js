import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const InputFieldWrapper = styled.div`
  position: relative;
  margin: 10px 0;
`;

const Input = styled.input`${({ theme }) => css`
  height: 40px;
  padding: 5px 10px;
  border: 2px solid ${theme.primary};
  border-radius: 3px;
  font-size: 16px;
  color: ${theme.primary};
  transition: all .4s ease;

  &:focus {
    outline: none;
    border: 1px solid ${theme.primary};
  }
`}`;

const FloatingLabel = styled.label`
  position: absolute;
  left: 12px;
  top: 18px;
  font-size: 16px;
  color: ${({ theme }) => theme.primary};
  transition: all .3s ease;

  ${Input}:focus + & {
    font-size: 12px;
    padding-top: 3px;
    top: 0;
  }

  ${Input}:valid + & {
    font-size: 12px;
    padding-top: 3px;
    top: 0;
  }
`;

const InputField = ({
  type,
  placeholder,
}) => (
  <InputFieldWrapper>
    <Input type={type} placeholder={placeholder} required />
    <FloatingLabel>{ placeholder }</FloatingLabel>
  </InputFieldWrapper>
);

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default InputField;
