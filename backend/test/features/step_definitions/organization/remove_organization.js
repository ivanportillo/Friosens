'use strict';

const should = require('should');
const { defineSupportCode } = require('cucumber');

const tokenUt = require('../../../utils/factories/User_factory')();

const repositories = require('../../../../repository');
const organizationRepository = repositories.Organization;
const userRepository = repositories.User;
const facilityRespository = repositories.Facility;

const PATHS = require('../../../../router/paths');
const request = require('../../support/request');

defineSupportCode(({ Given, When, Then }) => {
  let token;
  let removeResponse;
  Given(/^\[remove\-organization\] I'm logged as administrator$/, done => {
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

  When(/^I remove the organization ID (\d+)$/, (organizationId, done) => {
    const path = PATHS.ORGANIZATION_PATH.replace(':organization', organizationId.toString());
    request.del(path, null, token, (error, response, statusCode) => {
      should.not.exist(error);
      removeResponse = { response, statusCode };
      done();
    });
  });

  Then(/^I should receive a message "([^"]*)" and (\d+) as status code$/, (message, statusCode, done) => {
    removeResponse.response.message.should.be.eql(message);
    removeResponse.statusCode.should.be.eql(statusCode);
    done();
  });

  Then(/^Organization ID (\d+) should not exist$/, (organizationId, done) => {
    organizationRepository.findById(organizationId, (err, organizations) => {
      should.not.exist(err);
      organizations.should.be.empty();
      done();
    });
  });

  Then(/^Organization ID (\d+) should not exist and neither user ID (\d+)$/, (organizationId, userId, done) => {
    organizationRepository.findById(organizationId, (err, organizations) => {
      should.not.exist(err);
      organizations.should.be.empty();
      userRepository.findById(userId, (err, users) => {
        should.not.exist(err);
        users.should.be.empty();
        done();
      });
    });
  });

  Then(/^Organization ID (\d+) should not exist and neither facility ID (\d+)$/, (organizationId, facilityId, done) => {
    organizationRepository.findById(organizationId, (err, organizations) => {
      should.not.exist(err);
      organizations.should.be.empty();
      facilityRespository.findById(facilityId, (err, facilities) => {
        should.not.exist(err);
        facilities.should.be.empty();
        done();
      });
    });
  });

  Then(/^Organization ID (\d+) should not exist and neither facilities ID (\d+) ID (\d+) nor users ID (\d+) ID (\d+)$/,
    (orgId, facId1, facId2, userId1, userId2, done) => {
      organizationRepository.findById(orgId, (err, organizations) => {
        should.not.exist(err);
        organizations.should.be.empty();
        facilityRespository.findById(facId1, (err, facilities) => {
          should.not.exist(err);
          facilities.should.be.empty();
          facilityRespository.findById(facId2, (err, facilities) => {
            should.not.exist(err);
            facilities.should.be.empty();
            userRepository.findById(userId1, (err, users) => {
              should.not.exist(err);
              users.should.be.empty();
              userRepository.findById(userId2, (err, users) => {
                should.not.exist(err);
                users.should.be.empty();
                done();
              });
            });
          });
        });
      });
  });

  Then(/^I should receive a error "([^"]*)" and (\d+) as status code$/, (error, statusCode, done) => {
    removeResponse.response.error.should.be.eql(error);
    removeResponse.statusCode.should.be.eql(statusCode);
    done();
  });
});
