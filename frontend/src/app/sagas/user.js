import { fork, takeEvery, call, put } from 'redux-saga/effects';
import { fetchFacilities } from 'api';
import * as constants from 'actions/user/constants';
import * as userActions from 'actions/user';

export function* watchUser() {
  yield fork(watchFetchFacilities);
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

function* watchFetchFacilities() {
  yield takeEvery(constants.FETCH_FACILITIES, fetchFacilitiesProcess);
}
