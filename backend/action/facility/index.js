'use strict';

const repositories = require('../../repository');
const facilityRepository = repositories.Facility;
const unitRepository = repositories.Unit;

const createCreateFacility = require('./createFacility');
const createRemoveFacility = require('./removeFacility');

module.exports = {
  createFacility: createCreateFacility(facilityRepository),
  removeFacility: createRemoveFacility(facilityRepository, unitRepository)
};
