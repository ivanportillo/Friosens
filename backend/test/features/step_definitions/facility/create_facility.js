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
  When('I create to the user with ID {int} the following facility:', (int, table, done) => {
    const payload = {
      name: table.hashes()[0].name,
      location: table.hashes()[0].location,
      userId: int
    };

    request.post(PATHS.FACILITIES_PATH, payload, null, (error, response, statusCode) => {
      should.not.exists(error);
      statusCode.should.be.eql(200);
      response.item.name.should.be.eql(payload.name);
      response.item.location.should.be.eql(payload.location);
      response.item.user_id.should.be.eql(payload.userId);
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
});
