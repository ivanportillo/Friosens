import React, { PropTypes } from 'react';
import styled from 'styled-components';

import AppBar from 'react-toolbox/lib/app_bar';
import Chip from 'react-toolbox/lib/chip';

const GreenAppBar = styled(AppBar)`
  &&& {
    background-color: #004d40;
    height: 3.3em;
    padding-left: 4em;
    padding-right: 4em;
  }
`;

const Navbar = ({ showDrawer, user }) =>
  <GreenAppBar
    title="FrioSens"
    rightIcon="menu"
    onRightIconClick={showDrawer}
    flat
  >
    <Chip>
      <span>{user}</span>
    </Chip>
  </GreenAppBar>;

Navbar.propTypes = {
  showDrawer: PropTypes.func.isRequired,
  user: PropTypes.string,
};

Navbar.defaultProps = {
  user: null,
};

export default Navbar;
