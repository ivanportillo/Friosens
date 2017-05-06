import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { showDrawer, hideDrawer } from 'features/layout/actions';
import { logout } from 'features/auth/actions';

import Layout from 'features/layout/components/Layout';

const mapStateToProps = state => ({
  drawer: state.ui.drawer,
  isAdmin: state.auth.user ? state.auth.user.admin : false,
  user: state.auth.user,
});

const mapDispatchToProps = dispatch => ({
  showDrawer: () => dispatch(showDrawer()),
  hideDrawer: () => dispatch(hideDrawer()),
  logout: () => dispatch(logout()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout));
