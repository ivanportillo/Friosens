'use strict';

const repositories = require('../../repository');
const organizationRepository = repositories.Organization;
const facilityRepository = repositories.Facility;
const userRepository = repositories.User;

const createCreateOrganization = require('./createOrganization');
const createRemoveOrganization = require('./removeOrganization');
const createShowOrganizations = require('./showOrganizations');

module.exports = {
  createOrganization: createCreateOrganization(organizationRepository),
  removeOrganization: createRemoveOrganization(organizationRepository, facilityRepository, userRepository),
  showOrganizations: createShowOrganizations(organizationRepository)
};