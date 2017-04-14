'use strict';

const waterfall = require('async').waterfall;
const config = require('config');
const ValidationError = require('spur-errors').ValidationError;

module.exports = (unitRepository, unitServices) => {
  const _validate = (unit, cb) => {
    if(!unit.name) cb(ValidationError.create('Name is required'));
    else if(!unit.refrigerant) cb(ValidationError.create('Refrigerant is required'));
    else cb();
  };

  const _createUnit = (unit, facilityId, cb) => {
    unitRepository.create(unit, facilityId, cb);
  };

  const _generateToken = (unit, cb) => {
    const payload = { id: unit.id };
    unitServices.tokenManager.create(payload, config.app.token.ttl, (err, token) => {
      if (err) cb(err);
      else {
        unit.token = token;
        unit.save(cb);
      }
    });
  };

  return (facilityId, unit, callback) => waterfall([
    next => _validate(unit, next),
    next => _createUnit(unit, facilityId, next),
    (unit, next) => _generateToken(unit, next),
  ], callback);
};
