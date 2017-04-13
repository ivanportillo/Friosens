'use strict';

const unitRepository = require('../../repository').Unit;

const createCreateUnit = require('./createUnit');
const createShowUnits = require('./showUnits');
const createRemoveUnit = require('./removeUnit');

module.exports = {
  createUnit: createCreateUnit(unitRepository),
  showUnits: createShowUnits(unitRepository),
  removeUnit: createRemoveUnit(unitRepository)
};
