/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import Button from 'react-toolbox/lib/button';

const ButtonInstance =
  ({ label, ...rest }) => <Button raised primary label={label} flat ripple={false} {...rest} />;

const ActionButton = styled(ButtonInstance)`
  &&& {
    background: #004d40;
  }
`;

export default ActionButton;
