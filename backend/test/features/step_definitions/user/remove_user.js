'use strict';

const should = require('should');
const { defineSupportCode } = require('cucumber');

const PATHS = require('../../../../router/paths');
const request = require('../../support/request');

const tokenUt = require('../../../utils/factories/User_factory')();

defineSupportCode(({ Given, When, Then }) => {
  let token;
  let responseRemove;
  Given(/^\[remove\-user\] I'm logged in as an administrator$/, function (done) {
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

  When(/^I remove the user ID (\d+)$/, (userId, done) => {
    request.del(PATHS.USER_PATH.replace(':user', userId), null, token, (error, response, statusCode) => {
      should.not.exist(error);
      responseRemove = { response, statusCode };
      done();
    });
  });

  Then(/^I should receive a response with (\d+) as status code and "([^"]*)" as message$/, (statusCode, message, done) => {
    should(responseRemove.statusCode).be.eql(statusCode);
    should(responseRemove.response.message).be.eql(message);
    done();
  });

  Then(/^I should receive a error (\d+) with message "([^"]*)"$/, (statusCode, error, done) => {
    should(responseRemove.statusCode).be.eql(statusCode);
    should(responseRemove.response.error).be.eql(error);
    done();
  });
});