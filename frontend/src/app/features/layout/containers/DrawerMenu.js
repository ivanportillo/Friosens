import { connect } from 'react-redux';

import DrawerMenu from 'features/layout/components/Layout/DrawerMenu';

import { hideDrawer } from 'features/layout/actions';
import { logout } from 'features/auth/actions';

const mapStateToProps = state => ({
  drawer: state.ui.drawer,
  isAdmin: state.auth.user ? state.auth.user.admin : false,
});

const mapDispatchToProps = dispatch => ({
  hideDrawer: () => dispatch(hideDrawer()),
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DrawerMenu);
