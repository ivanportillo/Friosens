'use strict';

const unitRepository = require('../../repository').Unit;

const createCreateUnit = require('./createUnit');
const createShowUnits = require('./showUnits');

module.exports = {
  createUnit: createCreateUnit(unitRepository),
  showUnits: createShowUnits(unitRepository)
};
