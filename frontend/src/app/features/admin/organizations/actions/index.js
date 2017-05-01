import * as constants from './constants';

export function fetchOrganizations() {
  return {
    type: constants.FETCH_ORGANIZATIONS,
  };
}

export function receiveOrganizations(organizations) {
  return {
    type: constants.RECEIVE_ORGANIZATIONS,
    organizations,
  };
}

export function removeOrganization(organizationId) {
  return {
    type: constants.REMOVE_ORGANIZATION,
    organizationId,
  };
}

export function createOrganization(name, orgType) {
  return {
    type: constants.CREATE_ORGANIZATION,
    name,
    orgType,
  };
}
