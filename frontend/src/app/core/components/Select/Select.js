import React, { PropTypes } from 'react';
import Dropdown from 'react-toolbox/lib/dropdown';

const FormInput = ({ source, label, input, meta: { error, touched }, ...rest }) =>
  <Dropdown source={source} {...input} label={label} {...rest} />;

FormInput.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired,
  source: PropTypes.array.isRequired,
};

export default FormInput;

