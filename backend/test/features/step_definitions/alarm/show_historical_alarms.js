'use strict';

const should = require('should');
const { defineSupportCode } = require('cucumber');
const async = require('async');

const tokenUt = require('../../../utils/factories/User_factory')();

const PATHS = require('../../../../router/paths');
const request = require('../../support/request');

defineSupportCode(({ Given, When, Then }) => {
  let token;
  let showResponse;
  Given(/^\[show_historical_alarms\] I'm logged as user ID (\d+) with organization ID (\d+)$/, (userId, organizationId, done) => {
    const user = {
      id: userId,
      first_name: 'Nombre',
      last_name: 'Apellidos',
      enabled: true,
      admin: false,
      email: 'email@dominio.es',
      password: 'password',
      organization_id: organizationId
    };
    tokenUt.createLogged(user, (err, tokenResult) => {
      should.not.exist(err);
      token = tokenResult;
      done();
    });
  });

  When(/^I show historical alarms of last (\d+) alarms of unit ID (\d+)$/, (nAlarms, unitId, done) => {
    const path = PATHS.UNIT_ALARMS_PATH.replace(':unit', unitId.toString());
    request.get(`${path}?limit=${nAlarms}`, null, token, (error, response, statusCode) => {
      should.not.exist(error);
      should.exist(response);
      should.exist(statusCode);
      showResponse = { response, statusCode };
      done();
    });
  });

  When(/^I show historical alarms of unit ID (\d+)$/, (unitId, done) => {
    const path = PATHS.UNIT_ALARMS_PATH.replace(':unit', unitId.toString());
    request.get(path, null, token, (error, response, statusCode) => {
      should.not.exist(error);
      should.exist(response);
      should.exist(statusCode);
      showResponse = { response, statusCode };
      done();
    });
  });

  Then(/^I should receive (\d+) alarms and (\d+) as status code$/, (nAlarms, statusCode, done) => {
    should(showResponse.response.data).have.length(nAlarms);
    should(showResponse.statusCode).be.eql(statusCode);
    async.each(showResponse.response.data, (alarm, next) => {
      should(alarm).have.keys(
        'created_at',
        'title',
        'description',
        'active',
        'reading_id',
        'unit_id');
      next();
    }, done);
  });

  Then(/^I should receive a (\d+) error with message "([^"]*)"$/, (errorCode, message, done) => {
    should(showResponse.statusCode).be.eql(errorCode);
    should(showResponse.response.error).be.eql(message);
    done();
  });
});
