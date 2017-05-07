import * as constants from './constants';

export function fetchUnits() {
  return {
    type: constants.FETCH_UNITS,
  };
}

export function receiveUnits(units) {
  return {
    type: constants.RECEIVE_UNITS,
    units,
  };
}

export function removeUnit(unitId) {
  return {
    type: constants.REMOVE_UNIT,
    unitId,
  };
}

export function createUnit(unit) {
  return {
    type: constants.CREATE_UNIT,
    unit,
  };
}
