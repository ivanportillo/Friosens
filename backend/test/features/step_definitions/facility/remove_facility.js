'use strict';

const should = require('should');
const { defineSupportCode } = require('cucumber');

const repositories = require('../../../../repository');
const userRepository = repositories.User;
const facilityRepository = repositories.Facility;
const unitRepository = repositories.Unit;

const facilityActions = require('../../../../action/facility');
const unitActions = require('../../../../action/unit');

const createFacility = facilityActions.createFacility;
const removeFacility = facilityActions.removeFacility;
const createUnit = unitActions.createUnit;

const PATHS = require('../../../../router/paths');
const request = require('../../support/request');

defineSupportCode(({ When, Then }) => {
  When('I remove the facility with ID {int}', (int, done) => {
    const facilityId = int;
    request.del(`${PATHS.FACILITIES_PATH}/${facilityId}`, null, null, (error, response, statusCode) => {
      should.not.exists(error);
      statusCode.should.be.eql(200);
      response.message.should.be.eql('Removed');
      done();
    });
  });

  Then('It shouldn\'t appear when I search the facilities of user with ID {int}', (int, done) => {
    const userId = int;
    facilityRepository.findByUserId(userId, (err, facilities) => {
      facilities.should.be.empty();
      done();
    });
  });

  Then('It shouldn\'t appear any unit with facility ID {int}', function (int, done) {
    const facilityId = int;
    unitRepository.findByFacilityId(facilityId, (err, units) => {
      units.should.be.empty();
      done();
    });
  });
});
