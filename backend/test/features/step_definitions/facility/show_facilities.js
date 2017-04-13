'use strict';

const should = require('should');
const { defineSupportCode } = require('cucumber');

const tokenUt = require('../../../utils/factories/User_factory')();

const PATHS = require('../../../../router/paths');
const request = require('../../support/request');

defineSupportCode(({ Given, When, Then }) => {
  let token;
  let showResponse;
  Given(/^\[show_facilities\] I'm logged as user ID (\d+) with organization ID (\d+)$/, (userId, organizationId, done) => {
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
      if(err) done(err);
      else {
        token = tokenResult;
        done();
      }
    });
  });

  When(/^I get my facilities$/, done => {
    request.get(PATHS.FACILITIES_PATH, null, token, (error, response, statusCode) => {
      should.not.exist(error);
      showResponse = { response, statusCode };
      done();
    });
  });

  Then(/^I should receive (\d+) facilities and (\d+) as status code$/, (nFacilities, statusCode, done) => {
    const facilities = showResponse.response.data;
    facilities.length.should.be.eql(nFacilities);
    showResponse.statusCode.should.be.eql(statusCode);
    done();
  });
});