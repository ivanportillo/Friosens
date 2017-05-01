'use strict';

const should = require('should');
const async = require('async');
const { defineSupportCode } = require('cucumber');

const PATHS = require('../../../../router/paths');
const request = require('../../support/request');

const tokenUt = require('../../../utils/factories/User_factory')();

defineSupportCode(({ Given, When, Then }) => {
  let token;
  let responseShow;
  Given(/^\[show\-users\] I'm logged in as an administrator$/, function (done) {
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

  When(/^I show the users$/, (done) => {
    request.get(PATHS.USERS_PATH, null, token, (error, response, statusCode) => {
      should.not.exist(error);
      responseShow = { response, statusCode };
      done();
    });
  });

  Then(/^I should receive (\d+) users and (\d+) as status code$/, (nUsers, statusCode, done) => {
    should(responseShow.statusCode).be.eql(statusCode);
    should(responseShow.response.data).have.length(nUsers);
    async.each(responseShow.response.data, (user, next) => {
      should(user).have.keys(
        'first_name',
        'last_name',
        'telephone',
        'admin',
        'enabled',
        'email',
        'id',
        'organization_id'
      );
      next();
    }, done);
  });
});