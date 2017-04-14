'use strict';

const unitRepository = require('../../repository').Unit;
const unitServices = require('../../services/unit');

const createCreateUnit = require('./createUnit');
const createShowUnits = require('./showUnits');
const createRemoveUnit = require('./removeUnit');

module.exports = {
  createUnit: createCreateUnit(unitRepository, unitServices),
  showUnits: createShowUnits(unitRepository),
  removeUnit: createRemoveUnit(unitRepository)
};
