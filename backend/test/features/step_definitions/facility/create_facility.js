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
  Given('[create-facility] I\'m logged in as an administrator', function (done) {
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
  When('I create to the user with ID {int} the following facility:', (int, table, done) => {
    const payload = {
      name: table.hashes()[0].name,
      location: table.hashes()[0].location,
      userId: int
    };
    request.post(PATHS.FACILITIES_PATH, payload, token, (error, response, statusCode) => {
      should.not.exist(error);
      responseCreate = { response, statusCode };
      done();
    });
  });

  Then('User with ID {int} should have one facility with name {stringInDoubleQuotes}', (int, stringInDoubleQuotes, done) => {
    const userId = int;
    const facilityName = stringInDoubleQuotes;
      facilityRepository.findByUserId(userId, (err, facility) => {
          if(err) done(err);
          else {
              facility.user_id.should.be.eql(userId);
              facility.name.should.be.eql(facilityName);
              done();
          }
      });
  });

  Then('the response is a validation error with code {int} and message {stringInDoubleQuotes}', function (int, stringInDoubleQuotes, done) {
    const errorCode = int;
    const error = stringInDoubleQuotes;
    responseCreate.statusCode.should.be.eql(errorCode);
    responseCreate.response.error.should.be.eql(error);
    done();
  });
});
