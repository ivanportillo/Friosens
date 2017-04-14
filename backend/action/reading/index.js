'use strict';

const readingRepository = require('../../repository').Reading;

const createRegisterReading = require('./registerReading');

module.exports = {
  registerReading: createRegisterReading(readingRepository)
};
