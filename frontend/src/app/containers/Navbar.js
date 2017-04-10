import { connect } from 'react-redux';

import { showDrawer } from 'actions/ui';

import Navbar from 'components/Layout/Navbar';

const mapDispatchToProps = dispatch => ({
  showDrawer: () => dispatch(showDrawer()),
});

export default connect(null, mapDispatchToProps)(Navbar);
