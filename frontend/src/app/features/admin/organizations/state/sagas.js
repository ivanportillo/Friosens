import { fork, takeEvery, call, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import * as constants from 'features/admin/organizations/actions/constants';
import * as organizationsActions from 'features/admin/organizations/actions';
import * as api from 'infrastructure/api';

import * as PATHS from 'routes/paths';

export function* watchOrganizations() {
  yield fork(watchFetchOrganizations);
  yield fork(watchRemoveOrganization);
  yield fork(watchCreateOrganization);
}

export function* fetchOrganizationsProcess() {
  try {
    const { data } = yield call(api.fetchOrganizations);
    if (data) {
      const organizations = data.data;
      yield put(organizationsActions.receiveOrganizations(organizations));
    }
  } catch (e) {
    console.error(e);
  }
}

export function* removeOrganizationProcess(action) {
  try {
    const { data } = yield call(api.removeOrganization, action.organizationId);
    if (data) {
      yield put(organizationsActions.fetchOrganizations());
    }
  } catch (e) {
    console.error(e);
  }
}

export function* createOrganizationProcess(action) {
  try {
    const { data } = yield call(api.createOrganization, action.name, action.orgType);
    if (data.message) {
      yield put(push(PATHS.ADMIN_ORGANIZATIONS_PATH.url));
    }
  } catch (e) {
    console.error(e);
  }
}

export function* watchFetchOrganizations() {
  yield takeEvery(constants.FETCH_ORGANIZATIONS, fetchOrganizationsProcess);
}

export function* watchRemoveOrganization() {
  yield takeEvery(constants.REMOVE_ORGANIZATION, removeOrganizationProcess);
}

export function* watchCreateOrganization() {
  yield takeEvery(constants.CREATE_ORGANIZATION, createOrganizationProcess);
}
