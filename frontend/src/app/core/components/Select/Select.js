import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Dropdown from 'react-toolbox/lib/dropdown';

const StyledDropdown = styled(Dropdown)`
  width: ${props => props.width ? props.width : '100%'}
`;

const FormInput = ({ source, label, input, meta: { error, touched }, ...rest }) =>
  <StyledDropdown source={source} {...input} label={label} {...rest} />;

FormInput.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired,
  source: PropTypes.array.isRequired,
};

export default FormInput;

