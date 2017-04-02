'use strict';

const waterfall = require('async').waterfall;
const eachSeries = require('async').eachSeries;

module.exports = (facilityRepository, unitRepository) => {
  const _removeUnits = (facilityId, cb) => {
    unitRepository.findByFacilityId(facilityId, (err, units) => {
      eachSeries(units, (unit, next) => {
        unit.remove(next);
      }, cb);
    });
  };

  const _removeFacility = (facilityId, cb) => {
    facilityRepository.removeById(facilityId, cb);
  };

  return (facilityId, cb) => waterfall([
    next => _removeUnits(facilityId, next),
    next => _removeFacility(facilityId, next)
  ], cb);
};
