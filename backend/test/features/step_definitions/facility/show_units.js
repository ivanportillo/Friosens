'use strict';

const should = require('should');
const { defineSupportCode } = require('cucumber');

const tokenUt = require('../../../utils/factories/User_factory')();

const PATHS = require('../../../../router/paths');
const request = require('../../support/request');

defineSupportCode(({ Given, When, Then }) => {
  let token;
  let getResponse;
  Given(/^\[show_units\] I'm logged as user ID (\d+)$/, (id, done) => {
    const user = {
      id,
      first_name: 'Nombre',
      last_name: 'Apellidos',
      enabled: true,
      admin: false,
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

  When(/^I get units of facility ID (\d+)$/, (facilityId, done) => {
    request.get(PATHS.FACILITY_UNITS_PATH.replace(':id', facilityId.toString()), null, token, (error, response, statusCode) => {
      should.not.exist(error);
      getResponse = { response, statusCode };
      done();
    });
  });

  Then(/^I should receive (\d+) units and (\d+) as status code$/, (nUnits, statusCode, done) => {
    const units = getResponse.response.data;
    units.length.should.be.eql(nUnits);
    getResponse.statusCode.should.be.eql(statusCode);
    done();
  });

});