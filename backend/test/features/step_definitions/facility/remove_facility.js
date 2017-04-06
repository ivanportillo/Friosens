'use strict';

const should = require('should');
const { defineSupportCode } = require('cucumber');

const repositories = require('../../../../repository');
const facilityRepository = repositories.Facility;
const unitRepository = repositories.Unit;

const tokenUt = require('../../../utils/factories/User_factory')();

const PATHS = require('../../../../router/paths');
const request = require('../../support/request');

defineSupportCode(({ Given, When, Then }) => {
  let token;
  let responseRemove;

  Given(/^\[remove\-facility\] I'm logged in as an administrator$/, done => {
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

  When(/^I remove the facility with ID (\d+)$/, (facilityId, done) => {
    request.del(`${PATHS.FACILITIES_PATH}/${facilityId}`, null, null, (error, response, statusCode) => {
      should.not.exists(error);
      responseRemove = { response, statusCode };
      done();
    });
  });

  Then(/^facility with ID (\d+) shouldn't exist$/, (facilityId, done) => {
    facilityRepository.findById(facilityID, (err, facility) => {
      if (!err) {
        should.not.exist(facility);
        done();
      } else done(err);
    });
  });

  Then(/^shouldn't exist any unit with facility ID (\d+)$/, function (facilityId, done) {
    unitRepository.findByFacilityId(facilityId, (err, units) => {
      if (err) done(err);
      else {
        units.should.be.empty();
        done();
      }
    });
  });

  Then(/^I should receive a Not Found error with code (\d+) and message "([^"]*)"$/, function (errorCode, message, done) {
    responseRemove.statusCode.should.be.eql(errorCode);
    responseRemove.response.error.should.be.eql(message);
    done();
  });

});