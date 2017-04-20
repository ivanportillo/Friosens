'use strict';

const should = require('should');
const { defineSupportCode } = require('cucumber');
const async = require('async');

const repositories = require('../../../../repository');
const unitRepository = repositories.Unit;
const alarmRepository = repositories.Alarm;

const PATHS = require('../../../../router/paths');
const request = require('../../support/request');

defineSupportCode(({ Given, When, Then }) => {
  let token;
  Given(/^\[register\-alarm\] I'm logged as measuring device of unit ID (\d+)$/, (unitId, done) => {
    unitRepository.findOneById(unitId, (err, unit) => {
      should.not.exist(err);
      should(unit).not.be.empty();
      token = unit.token;
      done();
    });
  });
  When(/^I register the following reading to the unit ID (\d+) :$/, (unitId, table, done) => {
    const reading = table.hashes()[0];
    request.post(PATHS.REGISTER_READING_PATH, reading, token, (error, response, statusCode) => {
      should.not.exist(error);
      should.not.exist(response.error);
      should.exist(response.message);
      should(statusCode).be.eql(200);
      done();
    });
  });

  Then(/^unit ID (\d+) should have (\d+) alarms$/, (unitId, nAlarms, done) => {
    alarmRepository.findByUnitId(unitId, 200, (err, alarms) => {
      should(alarms).have.length(nAlarms);
      async.each(alarms, (alarm, next) => {
        should(alarm).have.keys('title', 'description', 'active');
        next();
      }, done);
    });
  });

  Then(/^unit ID (\d+) shouldn't have any alarm$/, (unitId, done) => {
    alarmRepository.findByUnitId(unitId, 200, (err, alarms) => {
      should(alarms).have.length(0);
      done();
    });
  });
});