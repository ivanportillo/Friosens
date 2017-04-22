import axios from 'axios';
import apiPaths from '../../../../backend/router/paths';

import { getToken } from 'utils/token';

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