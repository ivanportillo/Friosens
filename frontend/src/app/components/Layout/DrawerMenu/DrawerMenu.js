import React, { Component } from 'react';

import Drawer from 'react-toolbox/lib/drawer';
import { List, ListItem, ListSubHeader, ListDivider } from 'react-toolbox/lib/list';
import { Link } from 'react-router';

class DrawerMenu extends Component {
  render() {
    const { drawer, hideDrawer, logout } = this.props;
    return (
      <Drawer active={ drawer } onOverlayClick={hideDrawer} type="right">
        <List selectable>
          <ListSubHeader caption='Menú' />
          <ListItem caption='Instalaciones' ripple={false} />
          <ListItem caption='Alarmas' ripple={false} />
          <ListDivider />
          <ListItem caption='Configuración' ripple={false} />
          <ListItem caption='Cerrar sesión' ripple={false} onClick={logout} />
        </List>
      </Drawer>
    );
  }
}

export default DrawerMenu;