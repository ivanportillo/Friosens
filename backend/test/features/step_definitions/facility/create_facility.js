'use strict';

const should = require('should');
const { defineSupportCode } = require('cucumber');

const repositories = require('../../../../repository');
const facilityRepository = repositories.Facility;

const tokenUt = require('../../../utils/factories/User_factory')();

const PATHS = require('../../../../router/paths');
const request = require('../../support/request');

defineSupportCode(({ Given, When, Then }) => {
  let token;
  let responseCreate;
  Given(/^\[create\-facility\] I'm logged in as an administrator$/, done => {
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
  When(/^I create to the organization with ID (\d+) the following facility:$/, (int, table, done) => {
    const payload = {
      name: table.hashes()[0].name,
      location: table.hashes()[0].location,
      organization_id: int
    };
    request.post(PATHS.ADMIN_FACILITIES_PATH, payload, token, (error, response, statusCode) => {
      should.not.exist(error);
      responseCreate = { response, statusCode };
      done();
    });
  });

  Then(/^Organization with ID (\d+) should have one facility with name "([^"]*)"$/, (int, stringInDoubleQuotes, done) => {
    const organizationId = int;
    const facilityName = stringInDoubleQuotes;
      facilityRepository.findByOrganizationId(organizationId, (err, facility) => {
          should.not.exist(err);
          should(facility).have.length(1);
          should(facility[0].organization_id).be.eql(organizationId);
          should(facility[0].name).be.eql(facilityName);
          done();
      });
  });

  Then(/^the response is a validation error with code (\d+) and message "([^"]*)"$/, (int, stringInDoubleQuotes, done) => {
    const errorCode = int;
    const error = stringInDoubleQuotes;
    should(responseCreate.statusCode).be.eql(errorCode);
    should(responseCreate.response.error).be.eql(error);
    done();
  });
});