'use strict';

const should = require('should');
const { defineSupportCode } = require('cucumber');

const tokenUt = require('../../../utils/factories/User_factory')();

const organizationRepository = require('../../../../repository').Organization;

const PATHS = require('../../../../router/paths');
const request = require('../../support/request');

defineSupportCode(({ Given, When, Then }) => {
  let token;
  let createResponse;
  Given(/^\[create\-organization\] I'm logged in as an administrator$/, done => {
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

  When(/^I create the following organization:$/, (table, done) => {
    const organization = table.hashes()[0];
    request.post(PATHS.ORGANIZATIONS_PATH, organization, token, (error, response, statusCode) => {
      should.not.exist(error);
      createResponse = { response, statusCode };
      done();
    });
  });

  Then(/^I should receive a response with status code (\d+) and "([^"]*)" as message$/, (statusCode, message, done) => {
    should(createResponse.statusCode).be.eql(statusCode);
    should(createResponse.response.message).be.eql(message);
    done();
  });
  
  Then(/^should exist a organization with name "([^"]*)"$/, (orgName, done) => {
    organizationRepository.findOneByName(orgName, (err, organization) => {
      should.not.exist(err);
      should(organization.name).be.eql(orgName);
      should(organization.type).not.be.empty();
      done();
    });
  });

  Then(/^I should receive a error with status code (\d+) and "([^"]*)" as message$/, (statusCode, message, done) => {
    should(createResponse.statusCode).be.eql(statusCode);
    should(createResponse.response.error).be.eql(message);
    done();
  });
});