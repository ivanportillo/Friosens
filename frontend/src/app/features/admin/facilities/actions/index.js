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

export function removeFacility(facilityId) {
  return {
    type: constants.REMOVE_FACILITY,
    facilityId,
  };
}

export function createFacility(facility) {
  return {
    type: constants.CREATE_FACILITY,
    facility,
  };
}
