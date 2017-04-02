'use strict';

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

defineSupportCode(({ When, Then }) => {
  When('I update the name of facility with ID {int} by the following:', function (int, table, done) {
    done(null, 'pending');
  });

  Then('facility should have the new properties: name {stringInDoubleQuotes} and location {stringInDoubleQuotes}', function (stringInDoubleQuotes, stringInDoubleQuotes2, done) {
    done(null, 'pending');
  });
});
