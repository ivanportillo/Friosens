'use strict';

const should = require('should');
const async = require('async');
const { defineSupportCode } = require('cucumber');

const tokenUt = require('../../../utils/factories/User_factory')();

const unitRepository = require('../../../../repository').Unit;

const PATHS = require('../../../../router/paths');
const request = require('../../support/request');

defineSupportCode(({ Given, When, Then }) => {
  let token;
  let removeResponse;
  Given(/^\[remove\-unit\] I'm logged as administrator$/, done => {
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

  When(/^I remove the unit with ID (\d+) of facility ID (\d+)$/, (unitId, facilityId, done) => {
    const path = PATHS.FACILITY_UNIT_PATH.replace(":id", facilityId.toString()).replace(":unit", unitId.toString());
    request.del(path, null, token, (error, response, statusCode) => {
      should.not.exist(error);
      removeResponse = { response, statusCode };
      done();
    });
  });

  Then(/^I should receive a response with message "([^"]*)" and (\d+) as status code$/, (message, statusCode, done) => {
    removeResponse.response.message.should.be.eql(message);
    removeResponse.statusCode.should.be.eql(statusCode);
    done();
  });

  Then(/^unit with ID (\d+) shouldn't appear when I search units of facility ID (\d+)$/, (unitId, facilityId, done) => {
    unitRepository.findByFacilityId(facilityId, (err, units) => {
      if (err) done(err);
      else {
        async.each(units, (unit, next) => {
          unit.id.should.not.be.eql(unitId);
          next();
        }, done);
      }
    });
  });

  Then(/^\[remove_unit\] I should receive a Not Found error with code (\d+) and message "([^"]*)"$/, (errorCode, message, done) => {
    removeResponse.response.error.should.be.eql(message);
    removeResponse.statusCode.should.be.eql(errorCode);
    done();
  });
});