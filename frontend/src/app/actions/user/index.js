import * as constants from './constants';

export function fetchFacilities() {
  return {
    type: constants.FETCH_FACILITIES,
  };
}

export function receiveFacilities(facilities) {
  return {
    type: constants.RECEIVE_FACILITIES,
    facilities,
  };
}

export function receiveFacilitiesFailed(error) {
  return {
    type: constants.RECEIVE_FACILITIES_FAILED,
    error,
  };
}

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

export function fetchAlarms(unitId, limit) {
  return {
    type: constants.FETCH_ALARMS,
    unitId,
    limit,
  };
}

export function receiveAlarms(alarms, unitId) {
  return {
    type: constants.RECEIVE_ALARMS,
    alarms,
    unitId,
  };
}

export function receiveAlarmsFailed(error) {
  return {
    type: constants.RECEIVE_ALARMS_FAILED,
    error,
  };
}
