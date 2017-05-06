import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Input from 'react-toolbox/lib/input';

const StyledInput = styled(Input)`
  width: ${props => props.width ? props.width : '100%'}
`;

const FormInput = ({ type, label, input, meta: { error, touched }, ...rest }) =>
  <StyledInput type={type} {...input} label={label} error={touched && error} {...rest} />;

FormInput.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
};

export default FormInput;
