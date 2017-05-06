import axios from 'axios';
import apiPaths from '../../../../../backend/router/paths';

import { getToken } from '../../utils/token';

const API_BASE =
  (process.env.NODE_ENV === 'production') ? `https://${window.location.hostname}` :
                                            `http://${window.location.hostname}:3000`;

export const login = (email, password) => axios.post(apiPaths.LOGIN_PATH, {
  email,
  password,
}, {
  baseURL: API_BASE,
});

export const fetchAccount = () => axios.get(apiPaths.ACCOUNT_PATH, {
  baseURL: API_BASE,
  headers: { Authorization: getToken() },
});

export const fetchFacilities = () => axios.get(apiPaths.FACILITIES_PATH, {
  baseURL: API_BASE,
  headers: { Authorization: getToken() },
});

export const fetchUnits = facilityId => axios.get(apiPaths.FACILITY_UNITS_PATH.replace(':id', facilityId), {
  baseURL: API_BASE,
  headers: { Authorization: getToken() },
});

export const fetchAlarms = (unitId, limit) => {
  const path = apiPaths.UNIT_ALARMS_PATH.replace(':unit', unitId);
  return axios.get(`${path}?limit=${limit}`, {
    baseURL: API_BASE,
    headers: { Authorization: getToken() },
  });
};

export const fetchOrganizations = () => axios.get(apiPaths.ORGANIZATIONS_PATH, {
  baseURL: API_BASE,
  headers: { Authorization: getToken() },
});

export const removeOrganization = organizationId =>
  axios.delete(apiPaths.ORGANIZATION_PATH.replace(':organization', organizationId), {
    baseURL: API_BASE,
    headers: { Authorization: getToken() },
  });

export const createOrganization = (name, orgType) => axios.post(apiPaths.ORGANIZATIONS_PATH, {
  name,
  type: orgType,
}, {
  baseURL: API_BASE,
  headers: { Authorization: getToken() },
});

export const fetchUsers = () => axios.get(apiPaths.USERS_PATH, {
  baseURL: API_BASE,
  headers: { Authorization: getToken() },
});

export const removeUser = userId =>
  axios.delete(apiPaths.USER_PATH.replace(':user', userId), {
    baseURL: API_BASE,
    headers: { Authorization: getToken() },
  });

export const createUser = user => axios.post(apiPaths.USERS_PATH, user, {
  baseURL: API_BASE,
  headers: { Authorization: getToken() },
});

export const fetchAdminFacilities = () => axios.get(apiPaths.ADMIN_FACILITIES_PATH, {
  baseURL: API_BASE,
  headers: { Authorization: getToken() },
});

export const removeFacility = facilityId =>
  axios.delete(apiPaths.ADMIN_FACILITY_PATH.replace(':facility', facilityId), {
    baseURL: API_BASE,
    headers: { Authorization: getToken() },
  });

export const createFacility = (name, location, organization_id) => axios.post(apiPaths.ADMIN_FACILITIES_PATH, {
  name, location, organization_id,
}, {
  baseURL: API_BASE,
  headers: { Authorization: getToken() },
});
