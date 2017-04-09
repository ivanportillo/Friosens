import * as constants from './constants';

export function login(email, password) {
  return {
    type: constants.LOGIN_REQUEST,
    email,
    password,
  };
}

export function loginSuccess() {
  return {
    type: constants.LOGIN_SUCCESS,
  };
}

export function loginFailed(error) {
  return {
    type: constants.LOGIN_FAILED,
    error,
  };
}

export function fetchAccount() {
  return {
    type: constants.FETCH_ACCOUNT,
  };
}

export function receiveAccount(account) {
  return {
    type: constants.RECEIVE_ACCOUNT,
    account,
  };
}

export function receiveAccountFailed(error) {
  return {
    type: constants.RECEIVE_ACCOUNT_FAILED,
    error,
  }
}

export function bootApp() {
  return {
    type: constants.BOOT_APP,
  };
}

export function appBooted() {
  return {
    type: constants.APP_BOOTED,
  };
}