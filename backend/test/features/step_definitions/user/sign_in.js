'use strict';

const should = require('should');
const { defineSupportCode } = require('cucumber');

const PATHS = require('../../../../router/paths');
const request = require('../../support/request');

defineSupportCode(({ When, Then }) => {
  let responsePl = {};
  When('I sign in with email {stringInDoubleQuotes} and password {stringInDoubleQuotes}', function (stringInDoubleQuotes, stringInDoubleQuotes2, done) {
      const payload = {
          email: stringInDoubleQuotes,
          password: stringInDoubleQuotes2
      };

      request.post(PATHS.LOGIN_PATH, payload, null, (error, response, statusCode) => {
         responsePl = {
           error,
           response,
           statusCode
         };
         done();
      });
  });

  Then('I should receive a confirm message and a token', function (done) {
      should.not.exist(responsePl.error);
      responsePl.statusCode.should.be.eql(200);
      responsePl.response.should.have.key('token');
      done();
  });

  Then('I should receive an Unauthorized error with code {int} and message {stringInDoubleQuotes}', function (int, stringInDoubleQuotes, done) {
      const errorCode = int;
      const error = stringInDoubleQuotes;
      should.exist(responsePl.response.error);
      responsePl.response.error.should.be.eql(error);
      responsePl.statusCode.should.be.eql(errorCode);
      done();
  });
});