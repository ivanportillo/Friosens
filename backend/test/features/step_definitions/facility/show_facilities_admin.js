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
  Given(/^\[show\-facilities\-admin\] I'm logged in as an administrator$/, done => {
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

  When(/^\[show\-facilities\-admin\] I get my facilities$/, done => {
    request.get(PATHS.ADMIN_FACILITIES_PATH, null, token, (error, response, statusCode) => {
      should.not.exist(error);
      showResponse = { response, statusCode };
      done();
    });
  });

  Then(/^\[show\-facilities\-admin\] I should receive (\d+) facilities and (\d+) as status code$/, (nFacilities, statusCode, done) => {
    const facilities = showResponse.response.data;
    should(facilities).have.length(nFacilities);
    should(showResponse.statusCode).be.eql(statusCode);
    done();
  });

  Then(/^each facility should have name, location and organization$/, done => {
    async.each(showResponse.response.data, (facility, next) => {
      should(facility).have.keys('name', 'location', 'organization', 'organization_id', 'id');
      should(facility.organization).have.keys('id', 'name', 'type');
      next();
    }, done);
  });
});
