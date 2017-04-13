'use strict';

const waterfall = require('async').waterfall;

const ValidationError = require('spur-errors').ValidationError;
const NotFoundError = require('spur-errors').NotFoundError;

module.exports = unitRepository => {
  const _validateParams = (facilityId, unitId, cb) => {
    if (!facilityId) cb(ValidationError.create('FacilityId is required'));
    else if (!unitId) cb(ValidationError.create('UnitId is required'));
    else cb();
  };

  const _findUnit = (facilityId, unitId, cb) => {
    unitRepository.findByFacilityAndUnitId(facilityId, unitId, (err, units) => {
      if (err) cb(err);
      else if(!units || !units.length) cb(NotFoundError.create('Unit not found'));
      else cb(null, units[0]);
    });
  };

  const _removeUnit = (unit, cb) => {
    unitRepository.remove(unit.id, err => {
      if (err) cb(err);
      else cb(null, null, "Unit removed");
    });
  };

  return (facilityId, unitId, callback) => waterfall([
    next => _validateParams(facilityId, unitId, next),
    next => _findUnit(facilityId, unitId, next),
    (unit, next) => _removeUnit(unit, next)
  ], callback);
};