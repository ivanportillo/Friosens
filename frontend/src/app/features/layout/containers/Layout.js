import { connect } from 'react-redux';

import { showDrawer, hideDrawer } from 'features/layout/actions';
import { logout } from 'features/auth/actions';

import Layout from 'features/layout/components/Layout';

const mapStateToProps = state => ({
  drawer: state.ui.drawer,
  isAdmin: state.auth.user ? state.auth.user.admin : false,
  user: state.auth.user ? `${state.auth.user.first_name} ${state.auth.user.last_name}` : null,
});

const mapDispatchToProps = dispatch => ({
  showDrawer: () => dispatch(showDrawer()),
  hideDrawer: () => dispatch(hideDrawer()),
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
