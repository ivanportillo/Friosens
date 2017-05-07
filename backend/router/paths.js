'use strict';

const PREFIX = '/api';
const prefix = path => PREFIX + path;
const adminPrefix = path => `${PREFIX}/admin${path}`;

// AUTH
exports.LOGIN_PATH = prefix('/login');
exports.LOGOUT_PATH = prefix('/logout');

// ACCOUNT
exports.REGISTER_PATH = prefix('/register');
exports.ACCOUNT_PATH = prefix('/account');

// FACILITIES
exports.FACILITIES_PATH = prefix('/facilities');
exports.FACILITY_UNITS_PATH = prefix('/facilities/:id/units');
exports.FACILITY_UNIT_PATH = prefix('/facilities/:id/units/:unit');

// UNITS
exports.UNIT_ALARMS_PATH = prefix('/units/:unit/alarms');

// READING
exports.REGISTER_READING_PATH = prefix('/reading');

// --- ADMIN ---

// USERS
exports.USERS_PATH = adminPrefix('/users');
exports.USER_PATH = adminPrefix('/users/:user');

// ORGANIZATIONS
exports.ORGANIZATIONS_PATH = adminPrefix('/organizations');
exports.ORGANIZATION_PATH = adminPrefix('/organizations/:organization');

// FACILITIES
exports.ADMIN_FACILITIES_PATH = adminPrefix('/facilities');
exports.ADMIN_FACILITY_PATH = adminPrefix('/facilities/:facility');

// UNITS
exports.ADMIN_UNITS_PATH = adminPrefix('/units');
exports.ADMIN_UNIT_PATH = adminPrefix('/units/:unit');

