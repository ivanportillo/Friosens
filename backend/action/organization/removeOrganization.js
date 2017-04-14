'use strict';

const NotFoundError = require('spur-errors').NotFoundError;
const waterfall = require('async').waterfall;

module.exports = (organizationRepository, facilityRepository, userRepository) => {
  const _checkOrganizationExists = (organizationId, cb) => {
    organizationRepository.findById(organizationId, (err, organization) => {
      if (err) cb(err);
      else if(!organization || !organization.length) cb(NotFoundError.create("Organization not found"));
      else cb();
    });
  };

  const _removeFacilities = (organizationId, cb) => {
    facilityRepository.removeByOrganizationId(organizationId, cb);
  };

  const _removeUsers = (organizationId, cb) => {
    userRepository.removeByOrganizationId(organizationId, cb);
  };

  const _removeOrganization = (organizationId, cb) => {
    organizationRepository.removeById(organizationId, err => {
      if (err) cb(err);
      else cb(null, null, "Organization removed");
    });
  };

  return (organizationId, callback) => waterfall([
    next => _checkOrganizationExists(organizationId, next),
    next => _removeFacilities(organizationId, next),
    next => _removeUsers(organizationId, next),
    next => _removeOrganization(organizationId, next)
  ], callback);
};
