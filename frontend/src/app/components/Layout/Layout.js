import React from 'react';
import styled from 'styled-components';

import Navbar from 'containers/Navbar';
import DrawerMenu from 'containers/DrawerMenu';

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

export default Layout;

