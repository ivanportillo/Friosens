import { fork, takeEvery, call, put } from 'redux-saga/effects';
import { fetchFacilities } from 'api';
import * as constants from 'features/facilities/actions/constants';
import * as facilityActions from 'features/facilities/actions';

export function* watchFacilities() {
  yield fork(watchFetchFacilities);
}

function* fetchFacilitiesProcess() {
  try {
    const { data } = yield call(fetchFacilities);
    if (data) {
      const facilities = data.data;
      yield put(facilityActions.receiveFacilities(facilities));
    }
  } catch (e) {
    yield put(facilityActions.receiveFacilitiesFailed(e));
  }
}

function* watchFetchFacilities() {
  yield takeEvery(constants.FETCH_FACILITIES, fetchFacilitiesProcess);
}
