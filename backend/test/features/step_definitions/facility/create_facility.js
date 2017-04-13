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
          if(err) done(err);
          else {
              token = tokenResult;
              done();
          }
      });
  });
  When(/^I create to the organization with ID (\d+) the following facility:$/, (int, table, done) => {
    const payload = {
      name: table.hashes()[0].name,
      location: table.hashes()[0].location,
      organizationId: int
    };
    request.post(PATHS.FACILITIES_PATH, payload, token, (error, response, statusCode) => {
      should.not.exist(error);
      responseCreate = { response, statusCode };
      done();
    });
  });

  Then(/^Organization with ID (\d+) should have one facility with name "([^"]*)"$/, (int, stringInDoubleQuotes, done) => {
    const organizationId = int;
    const facilityName = stringInDoubleQuotes;
      facilityRepository.findByOrganizationId(organizationId, (err, facility) => {
          if(err) done(err);
          else {
              facility.organization_id.should.be.eql(organizationId);
              facility.name.should.be.eql(facilityName);
              done();
          }
      });
  });

  Then(/^the response is a validation error with code (\d+) and message "([^"]*)"$/, (int, stringInDoubleQuotes, done) => {
    const errorCode = int;
    const error = stringInDoubleQuotes;
    responseCreate.statusCode.should.be.eql(errorCode);
    responseCreate.response.error.should.be.eql(error);
    done();
  });
});