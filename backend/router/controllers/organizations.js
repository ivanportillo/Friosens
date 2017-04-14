'use strict';

const organizationActions = require('../../action/organization');
const createOrganization = organizationActions.createOrganization;
const removeOrganization = organizationActions.removeOrganization;

const responseBuilder = require('../../utils/responseBuilder');

module.exports = {
  createOrganization: (req, res) => {
    const organization = {
      name: req.body.name,
      type: req.body.type
    };
    createOrganization(organization, responseBuilder.createResponse(req, res));
  },
  removeOrganization: (req, res) => {
    removeOrganization(req.params.organization, responseBuilder.createResponse(req, res));
  }
};
