import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';

import Drawer from 'react-toolbox/lib/drawer';
import { List, ListItem, ListSubHeader, ListDivider } from 'react-toolbox/lib/list';

import * as PATHS from 'routes/paths';

const DrawerMenu = ({ drawer, hideDrawer, logout, user }) =>
  <Drawer active={drawer} onOverlayClick={hideDrawer} type="right">
    <List selectable>
      <ListSubHeader caption="Menú" />
      {user && !user.admin ?
        <List selectable>
          <ListItem caption="Instalaciones" ripple={false} />
        </List> :
        <List selectable>
          <Link to={PATHS.ADMIN_ORGANIZATIONS_PATH.url}><ListItem caption="Organizaciones" ripple={false} /></Link>
          <Link to={PATHS.ADMIN_USERS_PATH.url}><ListItem caption="Usuarios" ripple={false} /></Link>
          <Link to={PATHS.ADMIN_FACILITIES_PATH.url}><ListItem caption="Instalaciones" ripple={false} /></Link>
            <Link to={PATHS.ADMIN_UNITS_PATH.url}><ListItem caption="Unidades" ripple={false} /></Link>
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
