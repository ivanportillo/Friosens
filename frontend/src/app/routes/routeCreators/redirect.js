import React, { PropTypes } from 'react';
import { Redirect } from 'react-router-dom';

import * as PATHS from '../paths';

const redirection = ({ needAuth, needAdmin, state }) => {
  const currentUser = state.auth.user;
  const isBooting = state.auth.isBooting;
  if (!isBooting) {
    if ((needAuth || needAdmin) && !currentUser) {
      return <Redirect to={PATHS.LOGIN_PATH.url} />;
    }
    if (currentUser) {
      if (!needAuth && !currentUser.admin) {
        return <Redirect to={PATHS.FACILITIES_PATH.url} />;
      }
      if (!needAdmin && currentUser.admin) {
        return <Redirect to={PATHS.ADMIN_ORGANIZATIONS_PATH.url} />;
      }
    }
  }


  return undefined;
};

redirection.propTypes = {
  needAdmin: PropTypes.bool.isRequired,
  needAuth: PropTypes.bool.isRequired,
  state: PropTypes.object.isRequired,
};

export default redirection;
