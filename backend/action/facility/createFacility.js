'use strict';

const waterfall = require('async').waterfall;

module.exports = facilityRepository => {
  const _createFacility = (facility, userId, cb) => {
    facilityRepository.create(facility, userId, cb);
  };

  return (facility, userId, callback) => _createFacility(facility, userId, callback);
};
