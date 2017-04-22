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