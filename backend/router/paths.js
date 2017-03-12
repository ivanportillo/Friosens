'use strict';

const PREFIX = '/api';
const prefix(path) => PREFIX + path;

//AUTH
exports.LOGIN_PATH = prefix('/login');

//ACCOUNT
exports.ACCOUNT_PATH = prefix('/account');

//FACILITIES
exports.FACILITIES_PATH = prefix('/facilities');
exports.FACILITY_PATH = prefix('/facilities/:id');
exports.FACILITY_UNITS_PATH = prefix('/facilities/:id/units');
exports.FACILITY_UNIT_PATH = prefix('/facilities/:id/units/:unit');
exports.FACILITY_UNIT_ALARMS_PATH = prefix('/facilities/:id/units/:unit/alarms');
exports.UNIT_PATH = prefix('/unit/:id');
exports.UNIT_READING_PATH = prefix('/unit/:id/readings');
