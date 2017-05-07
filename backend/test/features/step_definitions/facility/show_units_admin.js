'use strict';

const should = require('should');
const async = require('async');
const { defineSupportCode } = require('cucumber');

const tokenUt = require('../../../utils/factories/User_factory')();

const PATHS = require('../../../../router/paths');
const request = require('../../support/request');

defineSupportCode(({ Given, When, Then }) => {
  let token;
  let showResponse;
  Given(/^\[show_units_admin\] I'm logged as an administrator$/, done => {
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

  When(/^\[show_units_admin\] I get units$/, done => {
    request.get(PATHS.ADMIN_UNITS_PATH, null, token, (error, response, statusCode) => {
      should.not.exist(error);
      showResponse = { response, statusCode };
      done();
    });
  });

  Then(/^\[show_units_admin\] I should receive (\d+) units and (\d+) as status code$/, (nUnits, statusCode, done) => {
    const units = showResponse.response.data;
    should(units).have.length(nUnits);
    should(showResponse.statusCode).be.eql(statusCode);
    done();
  });

  Then(/^each unit should have name, location, refrigerant, token and facility$/, done => {
    async.each(showResponse.response.data, (unit, next) => {
      should(unit).have.keys('name', 'location', 'refrigerant', 'token', 'facility');
      next();
    }, done);
  });
});