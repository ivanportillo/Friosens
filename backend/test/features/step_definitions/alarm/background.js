'use strict';

const should = require('should');
const { defineSupportCode } = require('cucumber');
const async = require('async');

const repositories = require('../../../../repository');
const readingRepository = repositories.Reading;
const alarmRepository = repositories.Alarm;

defineSupportCode(({ Given }) => {
  Given(/^the following reading:$/, (table, done) => {
    const reading = table.hashes()[0];
    readingRepository.create(reading, (err, reading) => {
      should.not.exist(err);
      should.exist(reading);
      done();
    });
  });

  Given(/^the following alarms:$/, (table, done) => {
    const alarms = table.hashes();
    async.each(alarms, (alarm, next) => {
      alarmRepository.create(alarm, next);
    }, err => {
      should.not.exist(err);
      done();
    });
  });
});