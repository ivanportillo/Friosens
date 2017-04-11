'use strict';

const waterfall = require('async').waterfall;

const ValidationError = require('spur-errors').ValidationError;

module.exports = unitRepository => {
  const _validate = (unit, cb) => {
    if(!unit.name) cb(ValidationError.create('Name is required'));
    else if(!unit.refrigerant) cb(ValidationError.create('Refrigerant is required'));
    else cb();
  };

  const _createUnit = (unit, facilityId, cb) => {
    unitRepository.create(unit, facilityId, cb);
  };

  return (facilityId, unit, callback) => waterfall([
    next => _validate(unit, next),
    next => _createUnit(unit, facilityId, next),
  ], callback);
};
