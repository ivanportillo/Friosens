'use strict';

const waterfall = require('async').waterfall;
const eachSeries = require('async').eachSeries;
const NotFoundError = require('spur-errors').NotFoundError;

module.exports = (facilityRepository, unitRepository) => {
  const _validFacility = (facilityId, cb) => {
    facilityRepository.findOneById(facilityId, (err, facility) => {
      if(err) cb(err);
      else if(!facility) cb(NotFoundError.create('Facility not found'));
      else cb();
    });
  };

  const _removeUnits = (facilityId, cb) => {
    unitRepository.findByFacilityId(facilityId, (err, units) => {
      if(err) cb(err);
      else if(!units.length) cb(NotFoundError.create('Not found units'));
      else {
        eachSeries(units, (unit, next) => {
          unit.remove(next);
        }, cb);
      }
    });
  };

  const _removeFacility = (facilityId, cb) => {
    facilityRepository.removeById(facilityId, cb);
  };

  return (facilityId, cb) => waterfall([
    next => _validFacility(facilityId, next),
    next => _removeUnits(facilityId, next),
    next => _removeFacility(facilityId, next)
  ], cb);
};
