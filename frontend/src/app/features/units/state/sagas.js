import { fork, takeEvery, call, put } from 'redux-saga/effects';
import { fetchUnits } from 'infrastructure/api';
import * as constants from 'features/units/actions/constants';
import * as unitsActions from 'features/units/actions';

export function* watchUnits() {
  yield fork(watchFetchUnits);
}

function* fetchUnitsProcess(action) {
  try {
    const { data } = yield call(fetchUnits, action.facilityId);
    if (data) {
      const units = data.data;
      yield put(unitsActions.receiveUnits(units, action.facilityId));
    }
  } catch (e) {
    yield put(unitsActions.receiveUnitsFailed(e));
  }
}

function* watchFetchUnits() {
  yield takeEvery(constants.FETCH_UNITS, fetchUnitsProcess);
}
