'use strict';

const should = require('should');
const { defineSupportCode } = require('cucumber');

const PATHS = require('../../../../router/paths');
const request = require('../../support/request');

const tokenUt = require('../../../utils/factories/User_factory')();

defineSupportCode(({ Given, When, Then }) => {
    let token;
    let responseCreate;
    Given(/^\[create\-user\] I'm logged in as an administrator$/, function (done) {
        const user = {
            first_name: 'Nombre',
            last_name: 'Apellidos',
            enabled: true,
            admin: true,
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

    When(/^I create a new user with the following data:$/, function (table, done) {
        const user = table.hashes()[0];
        request.post(PATHS.REGISTER_PATH, user, token, (error, response, statusCode) => {
            responseCreate = { error, response, statusCode };
            done();
        });
    });

    Then(/^I should be able to login with "([^"]*)" as username and "([^"]*)" as password$/, function (stringInDoubleQuotes, stringInDoubleQuotes2, done) {
        const payload = {
            email: stringInDoubleQuotes,
            password: stringInDoubleQuotes2
        };
        request.post(PATHS.LOGIN_PATH, payload, null, (error, response, statusCode) => {
           should.not.exists(error);
           statusCode.should.be.eql(200);
           response.data.should.not.be.empty();
           done();
        });
    });

    Then(/^\[create\-user\] I should receive a validation error with code (\d+) and message "([^"]*)"$/, function (int, stringInDoubleQuotes, done) {
        const errorCode = int;
        const message = stringInDoubleQuotes;
        responseCreate.statusCode.should.be.eql(errorCode);
        should.exist(responseCreate.response.error);
        responseCreate.response.error.should.be.eql(message);
        done();
    });
});