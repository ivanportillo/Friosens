import { fork, takeEvery, call, put } from 'redux-saga/effects';
import { fetchAlarms } from 'api';
import * as constants from 'actions/user/constants';
import * as userActions from 'actions/user';

import { watchFacilities } from 'features/facilities/state/sagas';
import { watchUnits } from 'features/units/state/sagas';

export function* watchUser() {
  yield fork(watchUnits);
  yield fork(watchFetchAlarms);
  yield fork(watchFacilities);
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

function* watchFetchAlarms() {
  yield takeEvery(constants.FETCH_ALARMS, fetchAlarmsProcess);
}
