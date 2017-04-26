import * as constants from './constants';

export function fetchUnits(facilityId) {
  return {
    type: constants.FETCH_UNITS,
    facilityId,
  };
}

export function receiveUnits(units, facilityId) {
  return {
    type: constants.RECEIVE_UNITS,
    units,
    facilityId,
  };
}

export function receiveUnitsFailed(error) {
  return {
    type: constants.RECEIVE_UNITS_FAILED,
    error,
  };
}