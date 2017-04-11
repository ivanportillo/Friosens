'use strict';

module.exports = unitRepository => {
  const _getUnits = (facilityId, cb) => {
    unitRepository.findByFacilityId(facilityId, cb);
  };

  return (facilityId, callback) => _getUnits(facilityId, callback);
};
