'use strict';

const should = require('should');
const { defineSupportCode } = require('cucumber');

const tokenUt = require('../../../utils/factories/User_factory')();

const PATHS = require('../../../../router/paths');
const request = require('../../support/request');

defineSupportCode(({ Given, When, Then }) => {
  let token;
  let showResponse;

  Given(/^\[show\-organizations\] I'm logged as administrator$/, done => {
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

  When(/^I show the organizations$/, done => {
    request.get(PATHS.ORGANIZATIONS_PATH, null, token, (error, response, statusCode) => {
      should.not.exist(error);
      showResponse = { response, statusCode };
      done();
    });
  });

  Then(/^I should receive (\d+) organizations and a (\d+) as status code$/, (nOrg, statusCode, done) => {
    should(showResponse.response.data).have.length(nOrg);
    should(showResponse.statusCode).be.eql(statusCode);
    done();
  });
});