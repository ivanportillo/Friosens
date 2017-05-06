import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getToken } from 'utils/token';

import { bootApp } from 'features/auth/actions';
import Loading from 'features/layout/components/Loading';

const mapStateToProps = state => ({
  isBooting: state.auth.isBooting,
  user: state.auth.user,
  token: getToken(),
});

const mapDispatchToProps = dispatch => ({
  bootApp: () => dispatch(bootApp()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Loading));
