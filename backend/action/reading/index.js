'use strict';

const repositories = require('../../repository');
const readingRepository = repositories.Reading;
const unitRepository = repositories.Unit;

const ruleEngine = require('../../utils/ruleEngine')();

const createRegisterReading = require('./registerReading');

module.exports = {
  registerReading: createRegisterReading(readingRepository, unitRepository, ruleEngine)
};
