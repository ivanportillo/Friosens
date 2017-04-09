import React from 'react';
import { AppBar } from 'react-toolbox/lib/app_bar';
import { Navigation } from 'react-toolbox/lib/navigation';
import { Link } from 'react-toolbox/lib/link';

const Layout = () =>
  <AppBar title="FrioSens" rightIcon="menu" fixed>
    <Navigation type="horizontal">
      <Link href="http://" label="Inbox" />
    </Navigation>
  </AppBar>;

export default Layout;

