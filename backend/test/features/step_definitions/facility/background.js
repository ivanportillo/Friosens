'use strict';

const { defineSupportCode } = require('cucumber');

const repositories = require('../../../../repository');
const userRepository = repositories.User;
const facilityRepository = repositories.Facility;
const unitRepository = repositories.Unit;

const facilityActions = require('../../../../action/facility');
const unitActions = require('../../../../action/unit');

const createUnit = unitActions.createUnit;
const createFacility = facilityActions.createFacility;
const removeFacility = facilityActions.removeFacility;

defineSupportCode(({ Given, When, Then }) => {
  Given('there is the following user:', (table, done) => {
    const user = table.hashes()[0];
    userRepository.create(user, err => {
      if(err) done(err);
      userRepository.findOneById(user.id, (err, userFound) => {
        if(err) done(err);
        else {
          if(userFound.id == user.id &&
             userFound.first_name == user.first_name &&
             userFound.last_name == user.last_name){
            done();
          } else done(new Error());
        }
      });
    });
  });

  //REMOVE_FACILITY - UPDATE_FACILITY
  Given('the following facility of the user ID {int}:', (int, table, done) => {
    const facility = table.hashes()[0];
    const userId = int;
    createFacility(facility, userId, done);
  });

  //REMOVE_FACILITY
  Given('the following unit belonging to previous facility ID {int}:', (int, table, done) => {
    const facilityId = int;
    const unit = table.hashes()[0];
    createUnit(unit, facilityId, done);
  });
});
