import { connect } from 'react-redux';

import { showDrawer } from 'features/layout/actions';

import Navbar from 'features/layout/components/Layout/Navbar';

const mapDispatchToProps = dispatch => ({
  showDrawer: () => dispatch(showDrawer()),
});

export default connect(null, mapDispatchToProps)(Navbar);
