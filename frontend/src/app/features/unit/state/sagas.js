import { fork, takeEvery, call, put } from 'redux-saga/effects';
import { fetchAlarms } from 'infrastructure/api';
import * as constants from 'features/unit/actions/constants';
import * as unitActions from 'features/unit/actions';

export function* watchUnit() {
  yield fork(watchFetchAlarms);
}

function* fetchAlarmsProcess(action) {
  try {
    const { data } = yield call(fetchAlarms, action.unitId, action.limit);
    if (data) {
      const alarms = data.data;
      yield put(unitActions.receiveAlarms(alarms, action.unitId));
    }
  } catch (e) {
    yield put(unitActions.receiveAlarmsFailed(e));
  }
}

function* watchFetchAlarms() {
  yield takeEvery(constants.FETCH_ALARMS, fetchAlarmsProcess);
}
