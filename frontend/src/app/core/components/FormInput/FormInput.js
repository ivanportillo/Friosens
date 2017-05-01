import React, { PropTypes } from 'react';
import Input from 'react-toolbox/lib/input';

const FormInput = ({ type, label, input, meta: { error, touched }, ...rest }) =>
  <Input type={type} {...input} label={label} error={touched && error} {...rest} />;

FormInput.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
};

export default FormInput;
