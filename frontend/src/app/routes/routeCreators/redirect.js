import React, { PropTypes } from 'react';
import { Redirect } from 'react-router-dom';
import { getToken } from 'utils/token';

import * as PATHS from '../paths';

const redirection = ({ needAuth, state }) => {
  const currentUser = state.auth.user;
  const isBooting = state.auth.isBooting;
  if (needAuth && !currentUser && !isBooting) {
    return <Redirect to={PATHS.LOGIN_PATH} />;
  }

  if (!needAuth && getToken()) {
    return <Redirect to={PATHS.ROOT_PATH} />;
  }
  return undefined;
};

redirection.propTypes = {
  needAuth: PropTypes.bool.isRequired,
  state: PropTypes.object.isRequired,
};

export default redirection;
