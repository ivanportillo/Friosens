import { fork, takeEvery, call, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import * as constants from 'features/admin/facilities/actions/constants';
import * as facilitiesActions from 'features/admin/facilities/actions';
import * as api from 'infrastructure/api';

import * as PATHS from 'routes/paths';

export function* watchFacilities() {
  yield [
    fork(watchFetchFacilities),
    fork(watchRemoveFacility),
    fork(watchCreateFacility),
  ];
}

export function* fetchFacilitiesProcess() {
  try {
    const { data } = yield call(api.fetchAdminFacilities);
    if (data) {
      const facilities = data.data;
      yield put(facilitiesActions.receiveFacilities(facilities));
    }
  } catch (e) {
    console.error(e);
  }
}

export function* removeFacilityProcess(action) {
  try {
    const { data } = yield call(api.removeFacility, action.facilityId);
    if (data) {
      yield put(facilitiesActions.fetchFacilities());
    }
  } catch (e) {
    console.error(e);
  }
}

export function* createFacilityProcess(action) {
  try {
    const { data } =
      yield call(
        api.createFacility,
        action.facility.name,
        action.facility.location,
        action.facility.organization_id,
      );
    if (data.data) {
      yield put(push(PATHS.ADMIN_FACILITIES_PATH.url));
    }
  } catch (e) {
    console.error(e);
  }
}

export function* watchFetchFacilities() {
  yield takeEvery(constants.FETCH_FACILITIES, fetchFacilitiesProcess);
}

export function* watchRemoveFacility() {
  yield takeEvery(constants.REMOVE_FACILITY, removeFacilityProcess);
}

export function* watchCreateFacility() {
  yield takeEvery(constants.CREATE_FACILITY, createFacilityProcess);
}
