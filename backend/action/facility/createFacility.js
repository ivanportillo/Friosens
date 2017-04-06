'use strict';

const waterfall = require('async').waterfall;
const ValidationError = require('spur-errors').ValidationError;

module.exports = facilityRepository => {
  const _validate = (facility, cb) => {
    if(!facility.name) cb(ValidationError.create('Name is required'));
    else cb();
  };

  const _createFacility = (facility, userId, cb) => {
    facilityRepository.create(facility, userId, cb);
  };

  return (facility, userId, callback) => waterfall([
    next => _validate(facility, next),
    next => _createFacility(facility, userId, next)
  ], callback);
};
