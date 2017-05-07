'use strict';

const waterfall = require('async').waterfall;
const ValidationError = require('spur-errors').ValidationError;

module.exports = facilityRepository => {
  const _validate = (facility, cb) => {
    if(!facility.name) cb(ValidationError.create('Name is required'));
    if(!facility.location) cb(ValidationError.create('Location is required'));
    if(!facility.organization_id) cb(ValidationError.create('Organization is required'));
    else cb();
  };

  const _createFacility = (facility, cb) => {
    facilityRepository.create(facility, facility.organization_id, cb);
  };

  return (facility, callback) => waterfall([
    next => _validate(facility, next),
    next => _createFacility(facility, next)
  ], callback);
};
