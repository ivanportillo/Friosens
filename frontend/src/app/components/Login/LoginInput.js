import React, { PropTypes } from 'react';
import Input from 'react-toolbox/lib/input';
import inputTheme from './input.css';

const LoginInput = ({ type, label, input, meta: { error, touched } }) =>
  <Input type={type} {...input} label={label} error={touched && error} theme={inputTheme} />;

LoginInput.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
};

export default LoginInput;