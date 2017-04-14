'use strict';

const repositories = require('../../repository');
const organizationRepository = repositories.Organization;

const createCreateOrganization = require('./create_organization');

module.exports = {
  createOrganization: createCreateOrganization(organizationRepository)
};