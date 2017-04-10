import React, { Component } from 'react';

import Drawer from 'react-toolbox/lib/drawer';
import { List, ListItem, ListSubHeader, ListDivider } from 'react-toolbox/lib/list';
import { Link } from 'react-router';

class DrawerMenu extends Component {
  render() {
    const { drawer, hideDrawer, isAdmin } = this.props;
    if(!isAdmin) {
      return (
        <Drawer active={ drawer } onOverlayClick={hideDrawer} type="right">
          <List selectable>
            <ListSubHeader caption='Menú' />
            <ListItem caption='Instalaciones' ripple={false} />
            <ListItem caption='Alarmas' ripple={false} />
            <ListDivider />
            <ListItem caption='Configuración' ripple={false} />
            <ListItem caption='Cerrar sesión' ripple={false} />
          </List>
        </Drawer>
      );
    }
    return (
      <Drawer active={ drawer } onOverlayClick={hideDrawer} type="right">
        <List selectable>
          <ListSubHeader caption='Menú' />
          <Link to="/"><ListItem caption="Instalaciones" ripple={false} /></Link>
          <ListItem caption='Usuarios' ripple={false} />
          <ListItem caption='Unidades' ripple={false} />
          <ListDivider />
          <ListItem caption='Configuración' ripple={false} />
          <ListItem caption='Cerrar sesión' ripple={false} />
        </List>
      </Drawer>
    );
  }
}

export default DrawerMenu;