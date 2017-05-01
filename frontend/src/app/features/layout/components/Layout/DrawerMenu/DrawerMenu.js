import React, { PropTypes } from 'react';

import Drawer from 'react-toolbox/lib/drawer';
import { List, ListItem, ListSubHeader, ListDivider } from 'react-toolbox/lib/list';

const DrawerMenu = ({ drawer, hideDrawer, logout, user }) =>
  <Drawer active={drawer} onOverlayClick={hideDrawer} type="right">
    <List selectable>
      <ListSubHeader caption="Menú" />
      {user && !user.admin ?
        <List selectable>
          <ListItem caption="Instalaciones" ripple={false} />
        </List> :
        <List selectable>
          <ListItem caption="Organizaciones" ripple={false} />
          <ListItem caption="Usuarios" ripple={false} />
          <ListItem caption="Instalaciones" ripple={false} />
          <ListItem caption="Unidades" ripple={false} />
        </List>
      }
      <ListDivider />
      <ListItem caption="Cerrar sesión" ripple={false} onClick={logout} />
    </List>
  </Drawer>;

DrawerMenu.propTypes = {
  drawer: PropTypes.bool.isRequired,
  hideDrawer: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  user: PropTypes.object,
};

DrawerMenu.defaultProps = {
  user: null,
};

export default DrawerMenu;
