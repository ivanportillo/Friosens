'use strict';

module.exports = (facilityRepository) => {
  const _getFacilities = (organizationId, cb) => {
    facilityRepository.findByOrganizationId(organizationId, cb);
  };

  return (userId, callback) => _getFacilities(userId, callback);
};