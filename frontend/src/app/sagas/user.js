import { fork, takeEvery, call, put } from 'redux-saga/effects';
import { fetchFacilities, fetchUnits, fetchAlarms } from 'api';
import * as constants from 'actions/user/constants';
import * as userActions from 'actions/user';

export function* watchUser() {
  yield fork(watchFetchFacilities);
  yield fork(watchFetchUnits);
  yield fork(watchFetchAlarms);
}

function* fetchFacilitiesProcess() {
  try {
    const { data } = yield call(fetchFacilities);
    if (data) {
      const facilities = data.data;
      yield put(userActions.receiveFacilities(facilities));
    }
  } catch (e) {
    yield put(userActions.receiveFacilitiesFailed(e));
  }
}

function* fetchUnitsProcess(action) {
  try {
    const { data } = yield call(fetchUnits, action.facilityId);
    if (data) {
      const units = data.data;
      yield put(userActions.receiveUnits(units, action.facilityId));
    }
  } catch (e) {
    yield put(userActions.receiveUnitsFailed(e));
  }
}

function* fetchAlarmsProcess(action) {
  try {
    const { data } = yield call(fetchAlarms, action.unitId, action.limit);
    if (data) {
      const alarms = data.data;
      yield put(userActions.receiveAlarms(alarms, action.unitId));
    }
  } catch (e) {
    yield put(userActions.receiveAlarmsFailed(e));
  }
}

function* watchFetchFacilities() {
  yield takeEvery(constants.FETCH_FACILITIES, fetchFacilitiesProcess);
}

function* watchFetchUnits() {
  yield takeEvery(constants.FETCH_UNITS, fetchUnitsProcess);
}

function* watchFetchAlarms() {
  yield takeEvery(constants.FETCH_ALARMS, fetchAlarmsProcess);
}
