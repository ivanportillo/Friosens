import React, { PropTypes } from 'react';
import { Switch as ToolboxSwitch } from 'react-toolbox/lib/switch';


const Switch = ({ input, label, disabled, meta: { error, touched }, ...rest }) =>
  <ToolboxSwitch
    label={label}
    disabled={disabled} {...rest}
    checked={input.checked}
    onChange={input.onChange}
  />;

Switch.propTypes = {
  disabled: PropTypes.bool.isRequired,
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired,
};

export default Switch;
