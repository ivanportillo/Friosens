'use strict';

const should = require('should');
const { defineSupportCode } = require('cucumber');

const repositories = require('../../../../repository');
const unitRepository = repositories.Unit;
const readingRepository = repositories.Reading;

const PATHS = require('../../../../router/paths');
const request = require('../../support/request');

defineSupportCode(({ Given, When, Then }) => {
  let token;
  let registerResponse;
  Given(/^\[register\-reading\] I'm logged as measuring device of unit ID (\d+)$/, (unitId, done) => {
    unitRepository.findOneById(unitId, (err, unit) => {
      should.not.exist(err);
      unit.should.not.be.empty();
      token = unit.token;
      done();
    });
  });

  Given(/^I'm not logged as measuring device$/, done => {
    token = null;
    done();
  });

  When(/^I register to the unit ID (\d+) the following reading:$/, (unitId, table, done) => {
    const reading = table.hashes()[0];
    request.post(PATHS.REGISTER_READING_PATH, reading, token, (error, response, statusCode) => {
      should.not.exist(error);
      registerResponse = { response, statusCode };
      done();
    });
  });

  Then(/^I should receive response with message "([^"]*)" and status code (\d+)$/, (message, statusCode, done) => {
    registerResponse.response.message.should.be.eql(message);
    registerResponse.statusCode.should.be.eql(statusCode);
    done();
  });

  Then(/^unit ID (\d+) should have a reading$/, (unitId, done) => {
    readingRepository.findByUnitId(unitId, (err, readings) => {
      should.not.exist(err);
      readings.should.not.be.empty();
      readings[0].should.have.keys(
        'created_at',
        'discharge_pressure',
        'suction_pressure',
        'in_temp_condenser',
        'out_temp_condenser',
        'in_temp_evaporator',
        'out_temp_evaporator',
        'current_1',
        'current_2',
        'current_3');
      done();
    });
  });

  Then(/^I should receive response with error "([^"]*)" and status code (\d+)$/, (error, statusCode, done) => {
    registerResponse.response.error.should.be.eql(error);
    registerResponse.statusCode.should.be.eql(statusCode);
    done();
  });
});