'use strict';

const waterfall = require('async').waterfall;
const each = require('async').each;
const NotFoundError = require('spur-errors').NotFoundError;
const alarmDispatcherClass = require('../../events/dispatchers/alarmDispatcher');

module.exports = (readingRepository, unitRepository, ruleEngine) => {
  const _registerReading = (unitId, reading, cb) => {
    reading.unit_id = unitId;
    readingRepository.create(reading, cb);
  };

  const _checkAlarms = (unitId, reading, cb) => {
    unitRepository.findOneById(unitId, (err, unit) => {
      if(err) cb(err);
      else if(!unit) cb(NotFoundError.create("Unit not found"));
      else {
        ruleEngine
          .run(Object.assign({}, reading, { refrigerant: unit.refrigerant }))
          .then(events => {
            each(events, (alarm, next) => {
              const AlarmDispatcher = new alarmDispatcherClass(alarm.type, unitId, reading.id);
              AlarmDispatcher.fire();
              next();
            }, () => cb(null, reading, "Reading registered"));
          })
          .catch(err => {
            console.log(err);
            cb(err.stack);
          });
      }
    });
  };

  return (unitId, reading, callback) => waterfall([
    next => _registerReading(unitId, reading, next),
    (reading, next) => _checkAlarms(unitId, reading, next)
  ], callback);
};
