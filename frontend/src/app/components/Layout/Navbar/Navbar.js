import React from 'react';

import AppBar from 'react-toolbox/lib/app_bar';
import Chip from 'react-toolbox/lib/chip';

import NavbarTheme from './Navbar.css';

const Navbar = ({ showDrawer }) =>
  <AppBar
    title="FrioSens"
    rightIcon="menu"
    onRightIconClick={showDrawer}
    flat
    theme={NavbarTheme}
  >
    <Chip>
      <span>Iván Portillo</span>
    </Chip>
  </AppBar>;

export default Navbar;