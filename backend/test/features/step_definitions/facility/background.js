'use strict';

const { defineSupportCode } = require('cucumber');

const repositories = require('../../../../repository');
const userRepository = repositories.User;

const facilityActions = require('../../../../action/facility');
const unitActions = require('../../../../action/unit');

const createUnit = unitActions.createUnit;
const createFacility = facilityActions.createFacility;

defineSupportCode(({ Given }) => {
  Given(/^there is the following user:$/, (table, done) => {
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

  //REMOVE_FACILITY
  Given(/^the following facility:$/, (table, done) => {
    const facility = table.hashes()[0];
    createFacility(facility, facility.user_id, err => {
      if (err) done(err);
      else done();
    });
  });


  Given(/^the following unit:$/, (table, done) => {
    const unit = table.hashes()[0];
    createUnit(unit, unit.facility_id, err => {
      if (err) done(err);
      else done();
    });
  });
});