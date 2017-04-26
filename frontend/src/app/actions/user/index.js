import * as constants from './constants';

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
