'use strict';

const should = require('should');
const { defineSupportCode } = require('cucumber');

const tokenUt = require('../../../utils/factories/User_factory')();

const PATHS = require('../../../../router/paths');
const request = require('../../support/request');

const unitRepository = require('../../../../repository').Unit;

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
      if(err) done(err);
      else {
        token = tokenResult;
        done();
      }
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
    createResponse.response.data.should.not.be.empty();
    createResponse.statusCode.should.be.eql(statusCode);
    done();
  });

  Then(/^facility with ID (\d+) should have a unit with name "([^"]*)"$/, (facilityId, unitName, done) => {
    unitRepository.findByFacilityId(facilityId, (err, units) => {
      if (err) done(err);
      else {
        units.length.should.be.eql(1);
        units[0].name.should.be.eql(unitName);
        done();
      }
    });
  });

  Then(/^I should receive a validation error with code (\d+) and message "([^"]*)"$/, (statusCode, message, done) => {
    createResponse.statusCode.should.be.eql(statusCode);
    createResponse.response.error.should.be.eql(message);
    done();
  });
});