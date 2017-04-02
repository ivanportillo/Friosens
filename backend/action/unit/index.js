'use strict';

const unitRepository = require('../../repository').Unit;

const createCreateUnit = require('./createUnit');

module.exports = {
  createUnit: createCreateUnit(unitRepository)
};
