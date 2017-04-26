import React, { PropTypes } from 'react';
import Input from 'react-toolbox/lib/input';

const LoginInput = ({ type, label, input, meta: { error, touched } }) =>
  <Input type={type} {...input} label={label} error={touched && error} />;

LoginInput.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
};

export default LoginInput;
