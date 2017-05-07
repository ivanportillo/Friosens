import { fork, takeEvery, call, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import * as constants from 'features/admin/units/actions/constants';
import * as unitsActions from 'features/admin/units/actions';
import * as api from 'infrastructure/api';

import * as PATHS from 'routes/paths';

export function* watchUnits() {
  yield [
    fork(watchFetchUnits),
    fork(watchRemoveUnit),
    fork(watchCreateUnit),
  ];
}

export function* fetchUnitsProcess() {
  try {
    const { data } = yield call(api.fetchAdminUnits);
    if (data) {
      const units = data.data;
      yield put(unitsActions.receiveUnits(units));
    }
  } catch (e) {
    console.error(e);
  }
}

export function* removeUnitProcess(action) {
  try {
    const { data } = yield call(api.removeUnit, action.unitId);
    if (data) {
      yield put(unitsActions.fetchUnits());
    }
  } catch (e) {
    console.error(e);
  }
}

export function* createUnitProcess(action) {
  try {
    const {
      name,
      location,
      refrigerant,
      mark,
      unit_model,
      serial_number,
      facility_id,
    } = action.unit;
    const { data } =
      yield call(
        api.createUnit,
        name,
        location,
        refrigerant,
        mark,
        unit_model,
        serial_number,
        facility_id,
      );
    if (data.data) {
      yield put(push(PATHS.ADMIN_UNITS_PATH.url));
    }
  } catch (e) {
    console.error(e);
  }
}

export function* watchFetchUnits() {
  yield takeEvery(constants.FETCH_UNITS, fetchUnitsProcess);
}

export function* watchRemoveUnit() {
  yield takeEvery(constants.REMOVE_UNIT, removeUnitProcess);
}

export function* watchCreateUnit() {
  yield takeEvery(constants.CREATE_UNIT, createUnitProcess);
}
