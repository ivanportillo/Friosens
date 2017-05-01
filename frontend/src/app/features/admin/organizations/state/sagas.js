import { fork, takeEvery, call, put } from 'redux-saga/effects';

import * as constants from 'features/admin/organizations/actions/constants';
import * as organizationsActions from 'features/admin/organizations/actions';
import * as api from 'infrastructure/api';

export function* watchOrganizations() {
  yield fork(watchFetchOrganizations);
  yield fork(watchRemoveOrganization);
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

export function* watchFetchOrganizations() {
  yield takeEvery(constants.FETCH_ORGANIZATIONS, fetchOrganizationsProcess);
}

export function* watchRemoveOrganization() {
  yield takeEvery(constants.REMOVE_ORGANIZATION, removeOrganizationProcess);
}
