'use strict';

const waterfall = require('async').waterfall;

module.exports = unitRepository => {
  const _createUnit = (unit, facilityId, cb) => {
    unitRepository.create(unit, facilityId, cb);
  };

  return (unit, facilityId, cb) => _createUnit(unit, facilityId, cb);
};
