'use strict';

const organizationActions = require('../../action/organization');
const createOrganization = organizationActions.createOrganization;

const responseBuilder = require('../../utils/responseBuilder');

module.exports = {
  createOrganization: (req, res) => {
    const organization = {
      name: req.body.name,
      type: req.body.type
    };
    createOrganization(organization, responseBuilder.createResponse(req, res));
  }
};
