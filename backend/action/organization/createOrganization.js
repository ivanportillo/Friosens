'use strict';

const ValidationError = require('spur-errors').ValidationError;
const waterfall = require('async').waterfall;

module.exports = organizationRepository => {
  const _validations = (organization, cb) => {
    const validTypes = ['particular', 'company', 'freelance'];
    if(!organization.name) cb(ValidationError.create("Name is required"));
    else if(!organization.type) cb(ValidationError.create("Type is required"));
    else if (!validTypes.includes(organization.type)) cb(ValidationError.create("Invalid type"));
    else cb();
  };

  const _createOrganization = (organization, cb) => {
    organizationRepository.create(organization, err => {
      if (err) cb(err);
      else {
        cb(null, organization, "Organization created");
      }
    });
  };

  return (organization, callback) => waterfall([
    next => _validations(organization, next),
    next => _createOrganization(organization, next)
  ], callback);
};
