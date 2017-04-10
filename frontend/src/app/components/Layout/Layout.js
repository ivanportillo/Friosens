import React from 'react';

import Navbar from 'containers/Navbar';
import DrawerMenu from 'containers/DrawerMenu';

const Layout = ({ children }) =>
  <div>
    <DrawerMenu />
    <Navbar />
    {children}
  </div>;

export default Layout;

