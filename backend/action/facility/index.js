'use strict';

const repositories = require('../../repository');
const facilityRepository = repositories.Facility;
const unitRepository = repositories.Unit;

const createCreateFacility = require('./createFacility');
const createRemoveFacility = require('./removeFacility');
const createShowFacilities = require('./showFacilities');
const createShowFacilitiesAdmin = require('./showFacilitiesAdmin');

module.exports = {
  createFacility: createCreateFacility(facilityRepository),
  removeFacility: createRemoveFacility(facilityRepository, unitRepository),
  showFacilities: createShowFacilities(facilityRepository),
  showFacilitiesAdmin: createShowFacilitiesAdmin(facilityRepository)
};
