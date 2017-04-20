'use strict';

const should = require('should');
const { defineSupportCode } = require('cucumber');

const tokenUt = require('../../../utils/factories/User_factory')();

const PATHS = require('../../../../router/paths');
const request = require('../../support/request');

const unitRepository = require('../../../../repository').Unit;
const unitServices = require('../../../../services/unit');

defineSupportCode(({ Given, When, Then }) => {
  let token;
  let createResponse;
  Given(/^\[create\-unit\] I'm logged in as administrator$/, done => {
    const user = {
      first_name: 'Nombre',
      last_name: 'Apellidos',
      enabled: true,
      admin: true,
      email: 'email@dominio.es',
      password: 'password'
    };
    tokenUt.createLogged(user, (err, tokenResult) => {
      should.not.exist(err);
      token = tokenResult;
      done();
    });
  });

  When(/^I create to facility ID (\d+) the following unit:$/, (facilityId, table, done) => {
    const unit = table.hashes()[0];
    request.post(PATHS.FACILITY_UNITS_PATH.replace(':id', facilityId.toString()), unit, token, (error, response, statusCode) => {
      should.not.exist(error);
      createResponse = { response, statusCode };
      done();
    });
  });

  Then(/^I should receive a response with the unit and status code (\d+)$/, (statusCode, done) => {
    should(createResponse.response.data).not.be.empty();
    should(createResponse.statusCode).be.eql(statusCode);
    done();
  });

  Then(/^facility with ID (\d+) should have a unit with name "([^"]*)"$/, (facilityId, unitName, done) => {
    unitRepository.findByFacilityId(facilityId, (err, units) => {
      should.not.exist(err);
      should(units).have.length(1);
      should(units[0].name).be.eql(unitName);
      done();
    });
  });

  Then(/^unit with name "([^"]*)" should have a valid token$/, (unitName, done) => {
    unitRepository.findByName(unitName, (err, unit) => {
      should.not.exist(err);
      unitServices.tokenManager.verify(unit.token, (err, payload) => {
        should.not.exist(err);
        should(payload).have.key('id');
        done();
      });
    });
  });

  Then(/^I should receive a validation error with code (\d+) and message "([^"]*)"$/, (statusCode, message, done) => {
    should(createResponse.statusCode).be.eql(statusCode);
    should(createResponse.response.error).be.eql(message);
    done();
  });
});