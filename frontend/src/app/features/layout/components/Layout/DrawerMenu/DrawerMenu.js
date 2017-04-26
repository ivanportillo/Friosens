import React, { PropTypes } from 'react';

import Drawer from 'react-toolbox/lib/drawer';
import { List, ListItem, ListSubHeader, ListDivider } from 'react-toolbox/lib/list';

const DrawerMenu = ({ drawer, hideDrawer, logout }) =>
  <Drawer active={drawer} onOverlayClick={hideDrawer} type="right">
    <List selectable>
      <ListSubHeader caption="Menú" />
      <ListItem caption="Instalaciones" ripple={false} />
      <ListItem caption="Alarmas" ripple={false} />
      <ListDivider />
      <ListItem caption="Configuración" ripple={false} />
      <ListItem caption="Cerrar sesión" ripple={false} onClick={logout} />
    </List>
  </Drawer>;

DrawerMenu.propTypes = {
  drawer: PropTypes.bool.isRequired,
  hideDrawer: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
};

export default DrawerMenu;
