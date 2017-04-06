'use strict';

module.exports = (facilityRepository) => {
  const _getFacilities = (userId, cb) => {
    facilityRepository.findByUserId(userId, cb);
  };

  return (userId, callback) => _getFacilities(userId, callback);
};