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

export const ADMIN_NEW_ORGANIZATION_PATH = {
  url: adminPath('organizations/new'),
  name: 'Organizations',
};

export const ADMIN_USERS_PATH = {
  url: adminPath('users'),
  name: 'Users',
};

export const ADMIN_NEW_USER_PATH = {
  url: adminPath('users/new'),
  name: 'Users',
};

export const ADMIN_FACILITIES_PATH = {
  url: adminPath('facilities'),
  name: 'Facilities',
};

export const ADMIN_NEW_FACILITY_PATH = {
  url: adminPath('facilities/new'),
  name: 'Facilities',
};

export const ADMIN_UNITS_PATH = {
  url: adminPath('units'),
  name: 'Units',
};

export const ADMIN_NEW_UNIT_PATH = {
  url: adminPath('units/new'),
  name: 'Units',
};

