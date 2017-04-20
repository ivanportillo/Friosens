'use strict';

const should = require('should');
const { defineSupportCode } = require('cucumber');

const tokenUt = require('../../../utils/factories/User_factory')();

const PATHS = require('../../../../router/paths');
const request = require('../../support/request');

defineSupportCode(({ Given, When, Then }) => {
  let token;
  let getResponse;
  Given(/^\[show_units\] I'm logged as user ID (\d+) with organization ID (\d+)$/, (userId, organizationId, done) => {
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

  When(/^I get units of facility ID (\d+)$/, (facilityId, done) => {
    request.get(PATHS.FACILITY_UNITS_PATH.replace(':id', facilityId.toString()), null, token, (error, response, statusCode) => {
      should.not.exist(error);
      getResponse = { response, statusCode };
      done();
    });
  });

  Then(/^I should receive (\d+) units and (\d+) as status code$/, (nUnits, statusCode, done) => {
    const units = getResponse.response.data;
    should(units).have.length(nUnits);
    should(getResponse.statusCode).be.eql(statusCode);
    done();
  });

});