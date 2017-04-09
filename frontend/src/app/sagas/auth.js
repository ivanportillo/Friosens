import { fork, call, takeEvery, take, put, race } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { push } from 'react-router-redux';
import * as constants from 'actions/auth/constants';
import * as authActions from 'actions/auth';

import { login, fetchAccount } from 'api';
import { setToken, clearToken, getToken } from 'utils/token';
import { ROOT_PATH, LOGIN_PATH } from 'routes/paths';

export function* watchAuth() {
  yield fork(watchLogin);
  yield fork(watchBoot);
  yield fork(watchFetchAccount);

  const token = yield call(getToken);
  if (token) yield put(authActions.bootApp());
}

function* loginProcess(action) {
  try {
    const response = yield call(login, action.email, action.password);
    if(response.data) {
      const token = response.data.data;
      yield put(authActions.loginSuccess());
      yield call(setToken, token);
      yield put(authActions.bootApp());
      const { appBooted } = yield race({
        appBooted: take(constants.APP_BOOTED),
        timeout: call(delay, 5000),
      });
      if (appBooted) {
        yield put(push(ROOT_PATH));
      } else {
        yield put(authActions.loginFailed("Tiempo de espera excedido"));
      }
    }
  } catch (e) {
    if(e.response.status === 401) yield put(authActions.loginFailed("Email y/o contraseña incorrectos"));
    else yield put(authActions.loginFailed(e.message));
  }
}

function* bootProcess() {
  yield put(authActions.fetchAccount());
  const { fetched, error } = yield race({
    fetched: take(constants.RECEIVE_ACCOUNT),
    error: take(constants.RECEIVE_ACCOUNT_FAILED),
  });

  if (fetched) {
    yield put(authActions.appBooted());
  } else {
    yield call(clearToken);
    yield put(push(LOGIN_PATH));
  }
}

function* fetchAccountProcess() {
  try {
    const account = yield call(fetchAccount);
    if(account.data) {
      yield put(authActions.receiveAccount(account.data.data));
    }
  } catch (e) {
    yield put(authActions.receiveAccountFailed(e.message));
  }
}

function* watchLogin() {
  yield takeEvery(constants.LOGIN_REQUEST, loginProcess);
}

function* watchBoot() {
  yield takeEvery(constants.BOOT_APP, bootProcess);
}

function* watchFetchAccount() {
  yield takeEvery(constants.FETCH_ACCOUNT, fetchAccountProcess);
}