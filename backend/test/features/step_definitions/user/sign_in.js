'use strict';

const should = require('should');
const { defineSupportCode } = require('cucumber');

const PATHS = require('../../../../router/paths');
const request = require('../../support/request');

defineSupportCode(({ When, Then }) => {
  let responsePl = {};
  When(/^I sign in with email "([^"]*)" and password "([^"]*)"$/, function (stringInDoubleQuotes, stringInDoubleQuotes2, done) {
      const payload = {
          email: stringInDoubleQuotes,
          password: stringInDoubleQuotes2
      };

      request.post(PATHS.LOGIN_PATH, payload, null, (error, response, statusCode) => {
         should.not.exist(error);
         responsePl = { response, statusCode };
         done();
      });
  });

  Then(/^I should receive a token and "([^"]*)" as message$/, function (stringInDoubleQuotes, done) {
    const message = stringInDoubleQuotes;
    should(responsePl.statusCode).be.eql(200);
    should(responsePl.response.data).not.be.empty();
    should(responsePl.response.message).be.eql(message);
    done();
  });

  Then(/^I should receive an Unauthorized error with code (\d+) and message "([^"]*)"$/, function (int, stringInDoubleQuotes, done) {
      const errorCode = int;
      const error = stringInDoubleQuotes;
      should.exist(responsePl.response.error);
      should(responsePl.response.error).be.eql(error);
      should(responsePl.statusCode).be.eql(errorCode);
      done();
  });
});