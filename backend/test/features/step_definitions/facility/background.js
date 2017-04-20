'use strict';

const { defineSupportCode } = require('cucumber');
const async = require('async');
const should = require('should');

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
      should.not.exist(err);
      userRepository.findOneById(user.id, (err, userFound) => {
        should.not.exist(err);
        should(userFound.id).be.eql(user.id);
        should(userFound.first_name).be.eql(user.first_name);
        should(userFound.last_name).be.eql(user.last_name);
        done();
      });
    });
  });

  //REMOVE_FACILITY
  Given(/^the following facility:$/, (table, done) => {
    const facility = table.hashes()[0];
    createFacility(facility, facility.organization_id, err => {
      should.not.exist(err);
      done();
    });
  });


  Given(/^the following unit:$/, (table, done) => {
    const unit = table.hashes()[0];
    createUnit(unit.facility_id, unit, err => {
      should.not.exist(err);
      done();
    });
  });

  //SHOW_FACILITIES
  Given(/^the following facilities:$/, (table, done) => {
    const facilities = table.hashes();
    async.each(facilities, (facility, cb) => {
      createFacility(facility, facility.organization_id, err => {
        should.not.exist(err);
        cb();
      });
    }, done);
  });

  //SHOW_UNITS
  Given(/^the following units:$/, (table, done) => {
    const units = table.hashes();
    async.each(units, (unit, cb) => {
      createUnit(unit.facility_id, unit, err => {
        should.not.exist(err);
        cb();
      });
    }, done);
  });
});