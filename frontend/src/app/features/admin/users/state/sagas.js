import { fork, takeEvery, call, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import * as constants from 'features/admin/users/actions/constants';
import * as usersActions from 'features/admin/users/actions';
import * as api from 'infrastructure/api';

import * as PATHS from 'routes/paths';

export function* watchUsers() {
  yield fork(watchFetchUsers);
  yield fork(watchRemoveUser);
  //yield fork(watchCreateUser);
}

export function* fetchUsersProcess() {
  try {
    const { data } = yield call(api.fetchUsers);
    if (data) {
      const users = data.data;
      yield put(usersActions.receiveUsers(users));
    }
  } catch (e) {
    console.error(e);
  }
}

export function* removeUserProcess(action) {
  try {
    const { data } = yield call(api.removeUser, action.userId);
    if (data) {
      yield put(usersActions.fetchUsers());
    }
  } catch (e) {
    console.error(e);
  }
}
/*
export function* createUserProcess(action) {
  try {
    const { data } = yield call(api.createOrganization, action.name, action.orgType);
    if (data.message) {
      yield put(push(PATHS.ADMIN_ORGANIZATIONS_PATH.url));
    }
  } catch (e) {
    console.error(e);
  }
}*/

export function* watchFetchUsers() {
  yield takeEvery(constants.FETCH_USERS, fetchUsersProcess);
}

export function* watchRemoveUser() {
  yield takeEvery(constants.REMOVE_USER, removeUserProcess);
}
/*
export function* watchCreateUser() {
  yield takeEvery(constants.CREATE_USER, createUserProcess);
}*/
