'use strict';

const repositories = require('../../repository');
const alarmRepository = repositories.Alarm;

const createShowHistoricalAlarms = require('./showHistoricalAlarms');

module.exports = {
  showHistoricalAlarms: createShowHistoricalAlarms(alarmRepository),
};
