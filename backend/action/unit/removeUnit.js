'use strict';

const waterfall = require('async').waterfall;

const ValidationError = require('spur-errors').ValidationError;
const NotFoundError = require('spur-errors').NotFoundError;

module.exports = unitRepository => {
  const _validateParams = (unitId, cb) => {
    if (!unitId) cb(ValidationError.create('UnitId is required'));
    else cb();
  };

  const _findUnit = (unitId, cb) => {
    unitRepository.findOneById(unitId, (err, unit) => {
      if (err) cb(err);
      else if(!unit) cb(NotFoundError.create('Unit not found'));
      else cb(null, unit);
    });
  };

  const _removeUnit = (unit, cb) => {
    unitRepository.remove(unit.id, err => {
      if (err) cb(err);
      else cb(null, null, "Unit removed");
    });
  };

  return (unitId, callback) => waterfall([
    next => _validateParams(unitId, next),
    next => _findUnit(unitId, next),
    (unit, next) => _removeUnit(unit, next)
  ], callback);
};