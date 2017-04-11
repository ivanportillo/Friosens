'use strict';

const facilitiesActions = require('../../action/facility');
const createFacility = facilitiesActions.createFacility;
const removeFacility = facilitiesActions.removeFacility;
const showFacilities = facilitiesActions.showFacilities;

const unitsActions = require('../../action/unit');
const showUnits = unitsActions.showUnits;

const responseBuilder = require('../../utils/responseBuilder');

module.exports = {
  createFacility: (req, res) => {
    const facility = {
      name: req.body.name,
      location: req.body.location
    };
    createFacility(facility, req.body.userId, responseBuilder.createResponse(req, res));
  },
  removeFacility: (req, res) => {
    removeFacility(req.params.id, responseBuilder.createResponse(req, res));
  },
  showFacilities: (req, res) => {
    showFacilities(req.payload.id, responseBuilder.createResponse(req, res));
  },
  getUnits: (req, res) => {
    showUnits(req.params.id, responseBuilder.createResponse(req, res));
  }
};
