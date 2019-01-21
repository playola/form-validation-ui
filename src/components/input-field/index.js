import React from 'react';
import PropTypes from 'prop-types';
import {
  InputFieldWrapper,
  Input,
  FloatingLabel,
} from './styles';

const InputField = ({
  placeholder,
  type,
  pattern,
  minLength,
  maxLength,
  field,
  ...props
}) => (
  <InputFieldWrapper>
    <Input
      type={type}
      pattern={pattern}
      minLength={minLength}
      maxLength={maxLength}
      required
      {...props}
      {...field}
    />
    <FloatingLabel>{ placeholder }</FloatingLabel>
  </InputFieldWrapper>
);

InputField.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(['text', 'password', 'number', 'email', 'tel']),
  pattern: PropTypes.string,
  minLength: PropTypes.string,
  maxLength: PropTypes.string,
  field: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
  }),
};

InputField.defaultProps = {
  placeholder: 'Input field',
  type: 'text',
  pattern: '.*',
  minLength: '1',
  maxLength: '20',
  /* field: {
    name: '',
    value: '',
    onChange: () => {},
    onBlur: () => {},
  }, */
};

export default InputField;
