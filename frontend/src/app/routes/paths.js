export const LOGIN_PATH = {
  url: '/login',
  name: 'Login',
};

export const UNITS_PATH = {
  url: '/facility/:facilityId/units',
  name: 'Units',
};

export const UNIT_PATH = {
  url: '/facility/:facilityId/units/:unitId',
  name: 'Unit',
};
export const FACILITIES_PATH = {
  url: '/facility',
  name: 'Facilities',
};

const adminPath = url => `/admin/${url}`;

export const ADMIN_ORGANIZATIONS_PATH = {
  url: adminPath('organizations'),
  name: 'Organizations',
};
