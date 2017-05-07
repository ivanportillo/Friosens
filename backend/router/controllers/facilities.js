'use strict';

const facilitiesActions = require('../../action/facility');
const createFacility = facilitiesActions.createFacility;
const removeFacility = facilitiesActions.removeFacility;
const showFacilities = facilitiesActions.showFacilities;
const showFacilitiesAdmin = facilitiesActions.showFacilitiesAdmin;

const unitsActions = require('../../action/unit');
const showUnits = unitsActions.showUnits;
const createUnit = unitsActions.createUnit;
const removeUnit = unitsActions.removeUnit;

const alarmsActions = require('../../action/alarm');
const showHistoricalAlarms = alarmsActions.showHistoricalAlarms;

const responseBuilder = require('../../utils/responseBuilder');

module.exports = {
  createFacility: (req, res) => {
    const facility = {
      name: req.body.name,
      location: req.body.location,
      organization_id: req.body.organization_id
    };
    createFacility(facility, responseBuilder.createResponse(req, res));
  },
  removeFacility: (req, res) => {
    removeFacility(req.params.facility, responseBuilder.createResponse(req, res));
  },
  showFacilities: (req, res) => {
    showFacilities(req.payload.organization_id, responseBuilder.createResponse(req, res));
  },
  showFacilitiesAdmin: (req, res) => {
    showFacilitiesAdmin(responseBuilder.createResponse(req, res));
  },
  getUnits: (req, res) => {
    showUnits(req.params.id, responseBuilder.createResponse(req, res));
  },
  createUnit: (req, res) => {
    const unit = {
      name: req.body.name,
      location: req.body.location,
      refrigerant: req.body.refrigerant,
      mark: req.body.mark
    };
    createUnit(req.params.id, unit, responseBuilder.createResponse(req, res));
  },
  removeUnit: (req, res) => {
    removeUnit(req.params.id, req.params.unit, responseBuilder.createResponse(req, res));
  },
  showAlarms: (req, res) => {
    showHistoricalAlarms(req.params.unit, req.query.limit, responseBuilder.createResponse(req, res));
  }
};
