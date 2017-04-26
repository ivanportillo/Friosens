import React, { PropTypes } from 'react';
import styled from 'styled-components';

import DrawerMenu from './DrawerMenu';
import Navbar from './Navbar';

const Content = styled.div` 
  padding-top: 2.5em;
  padding-left: 4em;
  padding-right: 4em;
  color: #39796b;
`;

const Layout = ({ children, showDrawer, hideDrawer, drawer, logout }) =>
  <div>
    <DrawerMenu
      hideDrawer={hideDrawer}
      drawer={drawer}
      logout={logout}
    />
    <Navbar showDrawer={showDrawer} />
    <Content>
      {children}
    </Content>
  </div>;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  drawer: PropTypes.bool.isRequired,
  hideDrawer: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  showDrawer: PropTypes.func.isRequired,
};

export default Layout;

