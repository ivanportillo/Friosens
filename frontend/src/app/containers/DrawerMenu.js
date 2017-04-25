import { connect } from 'react-redux';

import DrawerMenu from 'components/Layout/DrawerMenu';

import { hideDrawer } from 'actions/ui';
import { logout } from 'actions/auth';

const mapStateToProps = state => ({
  drawer: state.ui.drawer,
  isAdmin: state.auth.user ? state.auth.user.admin : false,
});

const mapDispatchToProps = dispatch => ({
  hideDrawer: () => dispatch(hideDrawer()),
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DrawerMenu);
