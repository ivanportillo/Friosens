'use strict';

const waterfall = require('async').waterfall;
const ValidationError = require('spur-errors').ValidationError;

module.exports = alarmRepository => {
  const _checkLimit = (limit, cb) => {
    if(limit) cb();
    else cb(ValidationError.create('Limit is required'));
  };

  const _getHistorical = (unitId, limit, cb) => {
    alarmRepository.findByUnitId(unitId, limit, cb);
  };

  return (unitId, limit, callback) => waterfall([
    next => _checkLimit(limit, next),
    next => _getHistorical(unitId, limit, next)
  ], callback);
};
