import { combineReducers } from 'redux';
import * as constants from 'actions/auth/constants';

import { getToken } from 'utils/token';

export function user(state = null, action) {
  switch(action.type) {
    case constants.RECEIVE_ACCOUNT:
      return action.account;
    default:
      return state;
  }
}

export function isLogging(state = false, action) {
  switch(action.type) {
    case constants.LOGIN_REQUEST:
      return true;
    case constants.LOGIN_SUCCESS:
    case constants.LOGIN_FAILED:
      return false;
    default:
      return state;
  }
}

export function isBooting(state = Boolean(getToken()), action) {
  switch (action.type) {
    case constants.BOOT_APP:
      return true;
    case constants.APP_BOOTED:
      return false;
    default:
      return state;
  }
}

export function error(state = null, action) {
  switch(action.type) {
    case constants.LOGIN_FAILED:
      return action.error;
    case constants.LOGIN_SUCCESS:
    case constants.LOGIN_REQUEST:
      return null;
    default:
      return state;
  }
}

const authReducer = combineReducers({
  user,
  isLogging,
  error,
  isBooting,
});

export default authReducer;