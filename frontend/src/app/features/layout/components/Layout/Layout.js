import React, { PropTypes } from 'react';
import styled from 'styled-components';

import DrawerMenu from 'features/layout/containers/DrawerMenu';
import Navbar from 'features/layout/containers/Navbar';

const Content = styled.div` 
  padding-top: 2.5em;
  padding-left: 4em;
  padding-right: 4em;
  color: #39796b;
`;

const Layout = ({ children }) =>
  <div>
    <DrawerMenu />
    <Navbar />
    <Content>
      {children}
    </Content>
  </div>;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

